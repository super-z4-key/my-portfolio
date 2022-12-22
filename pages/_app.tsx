import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [handleNav, setHandleNav] = useState(false);
  const buttonHandleNav = () => {
    setHandleNav(!handleNav);
  };

  return (
    <div className="container-none w-full h-[100vh] bg-slate-900 overflow-hidden relative">
      <Navbar buttonHandleNav={buttonHandleNav} handleNavValue={handleNav} />
      <Sidebar buttonHandleNav={buttonHandleNav} handleNavValue={handleNav} />
      <div className="h-[90%] w-full border-slate-500">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
