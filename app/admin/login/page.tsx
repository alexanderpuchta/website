'use client'
import { lusitana } from '@/app/ui/fonts';
import { Input } from '@/app/ui/text-input';
import { Button } from '@/app/ui/button';

import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Page() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        validate()
    }, [
        email,
        password
    ])

    function validate() {

    }

    async function handleOnSubmit(event) {
        console.log("***")
        event.preventDefault()
        console.log(email, password)
    }

    return (
        <div className='flex flex-col items-center p-6'>
            <form 
                onSubmit={handleOnSubmit}
                className='flex flex-col w-1/3'
            >
                <div className='flex flex-col gap-6'>
                    <span className={lusitana.className}>
                        Login
                    </span>

                    <div className='flex flex-col gap-4'>
                            <Input 
                                type='email'
                                placeholder='user@mail.com'
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />

                            <Input
                                type='password'
                                placeholder='password'
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                    </div>

                    <Button
                        onSubmit={handleOnSubmit}
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>
                </div>
            </form>
        </div>
    )
}