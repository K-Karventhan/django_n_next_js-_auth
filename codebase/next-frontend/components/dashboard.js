import { Fragment } from "react";
import Header from "./Auth/Header";


export default function Dashboard() {
    return (
        <Fragment>
            <div id="root" className="min-h-screen section-clickable">
                <div className="flex flex-col h-screen">
                   <Header/>
                    <div className="flex-1 overflow-auto">
                        <div
                            id="login-page"
                            className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 hidden section-clickable"
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
                                        <p className="mt-2 text-sm text-gray-600" contentEditable="false">
                                            Please sign in to your account
                                        </p>
                                    </div>
                                    <form id="login-form" className="space-y-4 section-clickable">
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
                                                    name="email"
                                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                            <p
                                                className="text-sm text-red-600 hidden section-clickable"
                                                id="email-error"
                                                contentEditable="false"
                                            >
                                                Please enter a valid email address
                                            </p>
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
                                                id="password-error"
                                                contentEditable="false"
                                            >
                                                Password must be at least 6 characters
                                            </p>
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
                                        <div className="mt-6 grid grid-cols-2 gap-3">
                                            <div>
                                                <span className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                                                    <i data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-google"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fab"
                                                            data-icon="google"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 488 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                                            />
                                                        </svg>
                                                    </i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                                                    <i data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-github"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fab"
                                                            data-icon="github"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                            />
                                                        </svg>
                                                    </i>
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
                                            id="to-register"
                                            className="font-medium text-primary-600 hover:text-primary-500 section-clickable"
                                            contentEditable="false"
                                        >
                                            Sign up
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            id="register-page"
                            className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 hidden section-clickable"
                        >
                            <div className="w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
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
                                            Create your account
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-600" contentEditable="false">
                                            Join us today and get started in minutes
                                        </p>
                                    </div>
                                    <form id="register-form" className="space-y-5 section-clickable">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="fullName"
                                                    className="block text-sm font-medium text-gray-700"
                                                    contentEditable="false"
                                                >
                                                    Full Name
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <i className="text-gray-400 text-sm" data-fa-i2svg="">
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
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
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
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <i className="text-gray-400 text-sm" data-fa-i2svg="">
                                                            <svg
                                                                className="svg-inline--fa fa-at"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="at"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                                data-fa-i2svg=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                                                                />
                                                            </svg>
                                                        </i>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
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
                                        </div>
                                        <div className="space-y-1">
                                            <label
                                                htmlFor="register-email"
                                                className="block text-sm font-medium text-gray-700"
                                                contentEditable="false"
                                            >
                                                Email Address
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <i className="text-gray-400 text-sm" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-envelope"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="envelope"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                                            />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="register-email"
                                                    name="email"
                                                    className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                    placeholder="john@example.com"
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
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <i className="text-gray-400 text-sm" data-fa-i2svg="">
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
                                                <input
                                                    type="password"
                                                    id="register-password"
                                                    name="password"
                                                    className="block w-full pl-10 pr-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                    placeholder="••••••••"
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
                                            <div className="mt-2">
                                                <div
                                                    className="text-xs text-gray-500"
                                                    contentEditable="false"
                                                >
                                                    Password must contain:
                                                </div>
                                                <ul className="text-xs text-gray-500 mt-1 space-y-1">
                                                    <li className="flex items-center" contentEditable="false">
                                                        <i
                                                            className="text-green-500 text-xs mr-2"
                                                            data-fa-i2svg=""
                                                        >
                                                            <svg
                                                                className="svg-inline--fa fa-check"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="check"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 448 512"
                                                                data-fa-i2svg=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                                                />
                                                            </svg>
                                                        </i>
                                                        At least 6 characters
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label
                                                htmlFor="confirm-password"
                                                className="block text-sm font-medium text-gray-700"
                                                contentEditable="false"
                                            >
                                                Confirm Password
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <i className="text-gray-400 text-sm" data-fa-i2svg="">
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
                                                <input
                                                    type="password"
                                                    id="confirm-password"
                                                    name="confirmPassword"
                                                    className="block w-full pl-10 pr-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm section-clickable"
                                                    placeholder="••••••••"
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
                                                id="confirm-password-error"
                                                contentEditable="false"
                                            >
                                                Passwords do not match
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <input
                                                id="terms"
                                                name="terms"
                                                type="checkbox"
                                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1 section-clickable"
                                            />
                                            <label
                                                htmlFor="terms"
                                                className="ml-3 block text-sm text-gray-900"
                                                contentEditable="false"
                                            >
                                                I agree to the
                                                <span
                                                    className="text-primary-600 hover:text-primary-500 cursor-pointer font-medium"
                                                    contentEditable="false"
                                                >
                                                    Terms of Service
                                                </span>
                                                and
                                                <span
                                                    className="text-primary-600 hover:text-primary-500 cursor-pointer font-medium"
                                                    contentEditable="false"
                                                >
                                                    Privacy Policy
                                                </span>
                                            </label>
                                        </div>
                                        <p
                                            className="text-sm text-red-600 hidden section-clickable"
                                            id="terms-error"
                                            contentEditable="false"
                                        >
                                            You must agree to the terms and conditions
                                        </p>
                                        <div className="space-y-3">
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                                                contentEditable="false"
                                            >
                                                <i className="mr-2" data-fa-i2svg="">
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
                                                Create Account
                                            </button>
                                            <div className="relative">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-gray-300" />
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span
                                                        className="px-2 bg-white text-gray-500"
                                                        contentEditable="false"
                                                    >
                                                        Or sign up with
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <button
                                                    type="button"
                                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                                    contentEditable="false"
                                                >
                                                    <i className="mr-2" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-google"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fab"
                                                            data-icon="google"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 488 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    Google
                                                </button>
                                                <button
                                                    type="button"
                                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                                    contentEditable="false"
                                                >
                                                    <i className="mr-2" data-fa-i2svg="">
                                                        <svg
                                                            className="svg-inline--fa fa-github"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fab"
                                                            data-icon="github"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    GitHub
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p
                                        className="mt-6 text-center text-sm text-gray-600"
                                        contentEditable="false"
                                    >
                                        Already have an account?
                                        <button
                                            id="to-login"
                                            className="font-medium text-primary-600 hover:text-primary-500 section-clickable"
                                            contentEditable="false"
                                        >
                                            Sign in
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="dashboard-page" className="section-clickable">
                            <div className="flex h-[calc(100vh-64px)]">
                                <div
                                    id="sidebar"
                                    className="w-64 bg-white shadow-md section-clickable"
                                >
                                    <div className="p-4 h-full flex flex-col">
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
                                        <nav className="space-y-1 flex-1">
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
                                            <span
                                                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                                contentEditable="false"
                                            >
                                                <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                    <svg
                                                        className="svg-inline--fa fa-chart-line"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="chart-line"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        data-fa-i2svg=""
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
                                                        />
                                                    </svg>
                                                </i>
                                                Analytics
                                            </span>
                                            <span
                                                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                                contentEditable="false"
                                            >
                                                <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                    <svg
                                                        className="svg-inline--fa fa-bell"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="bell"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        data-fa-i2svg=""
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                                                        />
                                                    </svg>
                                                </i>
                                                Notifications
                                            </span>
                                            <span
                                                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                                contentEditable="false"
                                            >
                                                <i className="w-5 h-5 mr-2" data-fa-i2svg="">
                                                    <svg
                                                        className="svg-inline--fa fa-circle-question"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="circle-question"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        data-fa-i2svg=""
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                                                        />
                                                    </svg>
                                                </i>
                                                Help &amp; Support
                                            </span>
                                        </nav>
                                        <div className="pt-6 mt-6 border-t border-gray-200">
                                            <button
                                                id="logout-btn"
                                                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 hover:text-red-700 w-full transition-colors duration-200 section-clickable"
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
                                <div className="flex-1 p-8 bg-gray-50 overflow-auto">
                                    <div className="max-w-6xl mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}