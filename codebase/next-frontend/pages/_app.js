import "@/styles/globals.css";
import { Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (<Fragment>
    <Component {...pageProps} />
    <ToastContainer />

  </Fragment>);
}
