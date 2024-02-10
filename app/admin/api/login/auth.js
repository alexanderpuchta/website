import { bcrypt } from 'bcrypt'
import { db } from '@/db'

export default async function handle(req, res) {
    if (req.method === "POST") {
        await login(req, res)
    } else {
        return res.status(405)
    }
}

async function login(req, res) {
    const {
        email,
        password
    } = req.body

    if (!email || !password) {
        return res
            .status(400)
            .json({
                message: "missing inputs. make sure to send email and password."
            })
    }

    try {

        const user = await db.user.find({
            where: {
                email: email
            }
        })

        bcrypt.compare(user.password, password, (error, data) => {

            if (error) {
                console.log("error while comparing password")
                res.status(400).json({
                    message: "something went wrong."
                })
            }

            if (data) {
                res.status(200).json({
                    message: "successfully logged in."
                })
            } else {
                res.status(401).json({
                    message: "invalid login credentials."
                })
            }
        })
    } catch (error) {

        console.log("error while trying to login:", error)
        res.status(400).json({
            message: `something went wrong, error: ${error}`
        })
    }
}