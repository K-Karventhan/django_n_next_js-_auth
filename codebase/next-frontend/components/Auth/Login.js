'use client'
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from "./Header";

import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const router = useRouter()


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm({
        mode: 'onChange'
    });

    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [loading, setLoading] = useState(false);

    // ✅ Redirect if already logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/dashboard');
        }
    }, []);


    const onSubmit = async (data) => {
        await fetch('http://localhost:8000/accounts/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('token', res.token)
                    router.push('/dashboard')
                } else {
                    toast(res.message);

                }
            })
    }

    return (
        <Fragment>
            <>
                {/* Main App Structure */}
                <div id="root" className="min-h-screen cursor-default-must section-clickable">
                    {/* Auth Module Demo */}
                    <div className="flex flex-col h-screen">
                        {/* Navigation */}
                        <Header />
                        {/* Content Area */}
                        <div className="flex-1 overflow-auto">
                            {/* Login Page */}
                            <div
                                id="login-page"
                                className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 cursor-default-must section-clickable"
                            >
                                <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <div className="flex justify-center mb-4">
                                                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <i className="text-primary-600 text-xl" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-lock"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="lock"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                                            />
                                                        </svg>
                                                    </i>
                                                </div>
                                            </div>
                                            <h2
                                                className="text-2xl font-bold text-gray-900"
                                                contentEditable="false"
                                            >
                                                Welcome back
                                            </h2>
                                            <p
                                                className="mt-2 text-sm text-gray-600"
                                                contentEditable="false"
                                            >
                                                Please sign in to your account
                                            </p>
                                        </div>
                                        <form
                                            id="login-form"
                                            onSubmit={handleSubmit((data) => onSubmit(data))}
                                            className="space-y-4 cursor-default-must section-clickable"
                                        >
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700"
                                                    contentEditable="false"
                                                >
                                                    Email
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        {...register('email', { required: true })}

                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                        placeholder="you@example.com"
                                                    />
                                                </div>
                                                {errors.email && <p className="text-sm text-red-600 section-clickable">Email is required.</p>}

                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="password"
                                                        className="block text-sm font-medium text-gray-700"
                                                        contentEditable="false"
                                                    >
                                                        Password
                                                    </label>
                                                    <span
                                                        className="text-sm font-medium text-primary-600 hover:text-primary-500 cursor-pointer"
                                                        contentEditable="false"
                                                    >
                                                        Forgot password?
                                                    </span>
                                                </div>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        {...register('password', { required: true })}

                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                        placeholder="••••••"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                                    >
                                                        <i data-fa-i2svg="">
                                                            <svg
                                                                className="svg-inline--fa fa-eye"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="far"
                                                                data-icon="eye"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 576 512"
                                                                data-fa-i2svg=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                                                                />
                                                            </svg>
                                                        </i>
                                                    </button>
                                                </div>
                                                {errors.password && <p className="text-sm text-red-600 section-clickable">Password is required.</p>}


                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <input
                                                        id="remember-me"
                                                        name="remember-me"
                                                        type="checkbox"
                                                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded section-clickable"
                                                    />
                                                    <label
                                                        htmlFor="remember-me"
                                                        className="ml-2 block text-sm text-gray-900"
                                                        contentEditable="false"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                                    contentEditable="false"
                                                >
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                        <div className="mt-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-gray-300" />
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span
                                                        className="px-2 bg-white text-gray-500"
                                                        contentEditable="false"
                                                    >
                                                        Or continue with
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p
                                            className="mt-6 text-center text-sm text-gray-600"
                                            contentEditable="false"
                                        >
                                            Don't have an account?
                                            <button
                                                onClick={() => { router.push('/sign-up') }}
                                                id="to-register"
                                                className="font-medium text-primary-600 hover:text-primary-500 cursor-default-must section-clickable"
                                                contentEditable="false"
                                            >
                                                Sign up
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Register Page */}
                            <div
                                id="register-page"
                                className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 hidden cursor-default-must section-clickable"
                            >
                                <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <div className="flex justify-center mb-4">
                                                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <i className="text-primary-600 text-xl" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-user-plus"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="user-plus"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                                                            />
                                                        </svg>
                                                    </i>
                                                </div>
                                            </div>
                                            <h2
                                                className="text-2xl font-bold text-gray-900"
                                                contentEditable="false"
                                            >
                                                Create an account
                                            </h2>
                                            <p
                                                className="mt-2 text-sm text-gray-600"
                                                contentEditable="false"
                                            >
                                                Sign up to get started
                                            </p>
                                        </div>
                                        <form
                                            id="register-form"
                                            className="space-y-4 cursor-default-must section-clickable"
                                        >
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="fullName"
                                                    className="block text-sm font-medium text-gray-700"
                                                    contentEditable="false"
                                                >
                                                    Full Name
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <p
                                                    className="text-sm text-red-600 hidden section-clickable"
                                                    id="fullName-error"
                                                    contentEditable="false"
                                                >
                                                    Full name is required
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="username"
                                                    className="block text-sm font-medium text-gray-700"
                                                    contentEditable="false"
                                                >
                                                    Username
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                        placeholder="johndoe"
                                                    />
                                                </div>
                                                <p
                                                    className="text-sm text-red-600 hidden section-clickable"
                                                    id="username-error"
                                                    contentEditable="false"
                                                >
                                                    Username is required
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="register-email"
                                                    className="block text-sm font-medium text-gray-700"
                                                    contentEditable="false"
                                                >
                                                    Email
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="email"
                                                        id="register-email"
                                                        name="email"
                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                        placeholder="you@example.com"
                                                    />
                                                </div>
                                                <p
                                                    className="text-sm text-red-600 hidden section-clickable"
                                                    id="register-email-error"
                                                    contentEditable="false"
                                                >
                                                    Please enter a valid email address
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="register-password"
                                                    className="block text-sm font-medium text-gray-700"
                                                    contentEditable="false"
                                                >
                                                    Password
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="password"
                                                        id="register-password"
                                                        name="password"
                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                        placeholder="••••••"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                                    >
                                                        <i data-fa-i2svg="">
                                                            <svg
                                                                className="svg-inline--fa fa-eye"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="far"
                                                                data-icon="eye"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 576 512"
                                                                data-fa-i2svg=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                                                                />
                                                            </svg>
                                                        </i>
                                                    </button>
                                                </div>
                                                <p
                                                    className="text-sm text-red-600 hidden section-clickable"
                                                    id="register-password-error"
                                                    contentEditable="false"
                                                >
                                                    Password must be at least 6 characters
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="terms"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded section-clickable"
                                                />
                                                <label
                                                    htmlFor="terms"
                                                    className="ml-2 block text-sm text-gray-900"
                                                    contentEditable="false"
                                                >
                                                    I agree to the{" "}
                                                    <span
                                                        className="text-primary-600 hover:text-primary-500 cursor-pointer"
                                                        contentEditable="false"
                                                    >
                                                        Terms
                                                    </span>{" "}
                                                    and{" "}
                                                    <span
                                                        className="text-primary-600 hover:text-primary-500 cursor-pointer"
                                                        contentEditable="false"
                                                    >
                                                        Privacy Policy
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                                    contentEditable="false"
                                                >
                                                    Create account
                                                </button>
                                            </div>
                                        </form>
                                        <p
                                            className="mt-6 text-center text-sm text-gray-600"
                                            contentEditable="false"
                                        >
                                            Already have an account?
                                            <button
                                                id="to-login"
                                                className="font-medium text-primary-600 hover:text-primary-500 cursor-default-must section-clickable"
                                                contentEditable="false"
                                            >
                                                Sign in
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Page */}
                            <div
                                id="dashboard-page"
                                className="hidden cursor-default-must section-clickable"
                            >
                                <div className="flex h-[calc(100vh-64px)]">
                                    {/* Sidebar */}
                                    <div
                                        id="sidebar"
                                        className="w-64 bg-white shadow-md cursor-default-must section-clickable"
                                    >
                                        <div className="p-4">
                                            <div className="flex items-center space-x-3 mb-6">
                                                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                                                    <i className="text-primary-600" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-user"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="user"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                                                            />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <div>
                                                    <p
                                                        className="text-sm font-medium text-gray-700 section-clickable"
                                                        id="sidebar-username"
                                                        contentEditable="false"
                                                    >
                                                        johndoe
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500 section-clickable"
                                                        id="sidebar-email"
                                                        contentEditable="false"
                                                    >
                                                        john@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <nav className="space-y-1">
                                                <span
                                                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-50 text-primary-600 cursor-pointer"
                                                    contentEditable="false"
                                                >
                                                    <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-house"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="house"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    Dashboard
                                                </span>
                                                <span
                                                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                                    contentEditable="false"
                                                >
                                                    <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-user"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="user"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    Profile
                                                </span>
                                                <span
                                                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                                    contentEditable="false"
                                                >
                                                    <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-gear"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="gear"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    Settings
                                                </span>
                                            </nav>
                                            <div className="pt-6 mt-6 border-t border-gray-200">
                                                <button
                                                    id="logout-btn"
                                                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 hover:text-red-700 w-full section-clickable"
                                                    contentEditable="false"
                                                >
                                                    <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-arrow-right-from-bracket"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="arrow-right-from-bracket"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Main Content */}
                                    <div className="flex-1 p-8 bg-gray-50 overflow-auto">
                                        <div className="max-w-4xl mx-auto">
                                            <h1
                                                className="text-2xl font-bold text-gray-900 mb-6 cursor-default-must section-clickable"
                                                id="welcome-message"
                                                contentEditable="false"
                                            >
                                                Welcome, John Doe!
                                            </h1>
                                            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                                                <div className="px-6 py-5 border-b border-gray-200">
                                                    <h2
                                                        className="text-lg font-medium text-gray-900"
                                                        contentEditable="false"
                                                    >
                                                        User Information
                                                    </h2>
                                                </div>
                                                <div className="px-6 py-5">
                                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Full Name
                                                            </dt>
                                                            <dd
                                                                className="mt-1 text-sm text-gray-900 cursor-default-must section-clickable"
                                                                id="user-fullname"
                                                            >
                                                                John Doe
                                                            </dd>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Username
                                                            </dt>
                                                            <dd
                                                                className="mt-1 text-sm text-gray-900 cursor-default-must section-clickable"
                                                                id="user-username"
                                                            >
                                                                johndoe
                                                            </dd>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Email
                                                            </dt>
                                                            <dd
                                                                className="mt-1 text-sm text-gray-900 cursor-default-must section-clickable"
                                                                id="user-email"
                                                            >
                                                                john@example.com
                                                            </dd>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Account created
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900">
                                                                June 8, 2023
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                                <div className="px-6 py-5 border-b border-gray-200">
                                                    <h2
                                                        className="text-lg font-medium text-gray-900"
                                                        contentEditable="false"
                                                    >
                                                        Recent Activity
                                                    </h2>
                                                </div>
                                                <div className="px-6 py-5">
                                                    <ul className="divide-y divide-gray-200">
                                                        <li className="py-4">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                                                                    <i
                                                                        className="text-primary-600 text-xs"
                                                                        data-fa-i2svg=""
                                                                    >
                                                                        <svg
                                                                            className="svg-inline--fa fa-lock"
                                                                            aria-hidden="true"
                                                                            focusable="false"
                                                                            data-prefix="fas"
                                                                            data-icon="lock"
                                                                            role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 448 512"
                                                                            data-fa-i2svg=""
                                                                        >
                                                                            <path
                                                                                fill="currentColor"
                                                                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                                                            />
                                                                        </svg>
                                                                    </i>
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p
                                                                        className="text-sm font-medium text-gray-900"
                                                                        contentEditable="false"
                                                                    >
                                                                        Successful login
                                                                    </p>
                                                                    <p
                                                                        className="text-sm text-gray-500"
                                                                        contentEditable="false"
                                                                    >
                                                                        Just now
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="py-4">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                                    <i
                                                                        className="text-green-600 text-xs"
                                                                        data-fa-i2svg=""
                                                                    >
                                                                        <svg
                                                                            className="svg-inline--fa fa-user-plus"
                                                                            aria-hidden="true"
                                                                            focusable="false"
                                                                            data-prefix="fas"
                                                                            data-icon="user-plus"
                                                                            role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 640 512"
                                                                            data-fa-i2svg=""
                                                                        >
                                                                            <path
                                                                                fill="currentColor"
                                                                                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                                                                            />
                                                                        </svg>
                                                                    </i>
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p
                                                                        className="text-sm font-medium text-gray-900"
                                                                        contentEditable="false"
                                                                    >
                                                                        Account created
                                                                    </p>
                                                                    <p
                                                                        className="text-sm text-gray-500"
                                                                        contentEditable="false"
                                                                    >
                                                                        June 8, 2023
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Toast Notification */}
                    <div
                        id="toast"
                        className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs transform transition-all duration-300 translate-y-20 opacity-0 cursor-default-must section-clickable"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                                <i
                                    id="toast-icon"
                                    className="text-green-500 text-xl cursor-default-must section-clickable"
                                    data-fa-i2svg=""
                                >
                                    <svg
                                        className="svg-inline--fa fa-circle-check"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="circle-check"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                        />
                                    </svg>
                                </i>
                            </div>
                            <div>
                                <p
                                    id="toast-title"
                                    className="text-sm font-medium text-gray-900 cursor-default-must section-clickable"
                                    contentEditable="false"
                                >
                                    Success!
                                </p>
                                <p
                                    id="toast-message"
                                    className="text-sm text-gray-500 cursor-default-must section-clickable"
                                    contentEditable="false"
                                >
                                    Action completed successfully.
                                </p>
                            </div>
                            <button
                                id="close-toast"
                                className="ml-4 text-gray-400 hover:text-gray-500 cursor-default-must section-clickable"
                            >
                                <i data-fa-i2svg="">
                                    <svg
                                        className="svg-inline--fa fa-xmark"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="xmark"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                        />
                                    </svg>
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </>

        </Fragment>
    )
}