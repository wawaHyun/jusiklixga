'use client';
import React, { useRef, useState } from 'react';

import { useSearchParams } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';

import { I_ApiUserLoginRequest, I_ApiUserLoginResponse } from '../api/login1/route';

export default function LoginPage2() {
    const { userData, setUserData } = useApp();

    // Utils
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect');

    // Refs
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // State
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [loginIsComplete, setLoginIsComplete] = useState(false);

    // Handlers
    const handleLogin = async () => {
        if (isLoading) return;

        setIsLoading(true);
        setError('');
        try {
            if (!loginRef.current?.value || !passwordRef.current?.value)
                throw new Error('Please enter your credentials.');

            const payload: I_ApiUserLoginRequest = {
                username: loginRef.current?.value,
                password: passwordRef.current?.value,
            };
            console.log(`MY-INFO: Payload is ${JSON.stringify(payload)}`)

            console.log(`1 - App Routing GET`)
            const response1 = await fetch('/api/hello', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data1 = await response1.json()
			console.log(`2 - fetch(hello) 자바를 다녀 온 정보 :${JSON.stringify(data1)} `)

            // -------------------------------------------------------------
            console.log(`2 - App Routing POST`)
            const response2 = await fetch('/api/login2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data2 = await response2.json()
			console.log(`2 - fetch(login2) 자바를 다녀 온 정보 :${JSON.stringify(data2)} `)


        } catch (error) {
            let mess = 'Something went wrong.';
            if (error instanceof Error) {
                mess = error.message;
            }
            setError(mess);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="m-auto flex flex-col gap-6 p-10 w-full max-w-md border-2 rounded-xl"
            style={{ height: '435px' }}
        >
            {loginIsComplete ? (
                <div className="m-auto flex flex-col gap-6 items-center">
                    <div className="loading loading-spinner loading-lg"></div>
                    <h1 className="text-2xl">Getting things ready...</h1>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl">Welcome Back!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Login</span>
                        </label>
                        <input
                            defaultValue="john@example.com"
                            type="text"
                            ref={loginRef}
                            className="input input-bordered ml-1 border"
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    if (passwordRef.current) {
                                        passwordRef.current.focus();
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            defaultValue="12345"
                            type="password"
                            ref={passwordRef}
                            className="input input-bordered ml-1 border"
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    handleLogin();
                                }
                            }}
                        />
                        <label className="label">
                            <span className="label-text-alt text-error">{error}</span>
                        </label>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </>
            )}
        </div>
    );
}