import NextAuth from "next-auth/next";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from '@/db'

const options = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials, req) {

                const data = {
                    email: credentials.email,
                    password: credentials.password
                }

                const res = await fetch(
                    `${process.env.PUBLIC_AUTH_URL}/admin/login`,
                    {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )

                const response = await res.json()

                if (response.ok) {
                    return response
                } else {
                    return null
                }
            }
        })
    ],
    adapter: PrismaAdapter(db),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },
    jwt: {
        secret: process.env.AUTH_SECRET,
        maxAge: 60 * 60 * 24 * 30,
        encryption: true
    },
    pages: {
        signIn: "/login",
        signOut: "/login",
        error: "/login"
    },
    callbacks: {
        async session(session, data, token) {

            if (data !== null) {
                session.user = data
            }

            return await session
        },
        async jwt({ token, data }) {
            return await token
        }
    }
}

export default(req, res) => NextAuth(req, res, options)