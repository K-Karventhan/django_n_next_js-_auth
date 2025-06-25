import Dashboard from "@/components/dashboard";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

export default function DashboardPage() {
    const router = useRouter()
     useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/');
            }
        }, []);
    return (
        <Fragment>
            <Dashboard />
        </Fragment>
    )
}