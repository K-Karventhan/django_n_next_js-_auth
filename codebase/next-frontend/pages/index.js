import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Fragment } from "react";
import Login from "@/components/Auth/Login";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}
