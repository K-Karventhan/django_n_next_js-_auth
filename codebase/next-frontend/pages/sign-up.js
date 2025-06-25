// import Register from "@/components/Auth/Register";
import { Fragment } from "react";
import dynamic from "next/dynamic";

const Register = dynamic(() => import("@/components/Auth/Register"), { ssr: false })
export default function RegisterPage() {
    return (
        <Fragment>
            <Register />
        </Fragment>
    )
}