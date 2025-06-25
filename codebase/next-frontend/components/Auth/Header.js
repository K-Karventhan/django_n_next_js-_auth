import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Header() {
    const router = useRouter()
    return (
        <Fragment>
            <nav id="header" className="bg-white shadow-sm p-4 section-clickable">
                <div className="container mx-auto flex justify-between items-center">
                    <div
                        className="text-xl font-bold text-primary-600"
                        contentEditable="false"
                    >
                        AuthModule
                    </div>
                    <div className="flex space-x-4">
                        <button
                            id="login-tab"
                            onClick={() => { router.push('/') }}
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 section-clickable"
                            contentEditable="false"
                        >
                            Login
                        </button>
                        <button
                            id="register-tab"
                            onClick={() => { router.push('/sign-up') }}
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 section-clickable"
                            contentEditable="false"
                        >
                            Register
                        </button>
                        <button
                            id="dashboard-tab"
                            onClick={() => { router.push('/dashboard') }}

                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 section-clickable"
                            contentEditable="false"
                        >
                            Dashboard
                        </button>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}