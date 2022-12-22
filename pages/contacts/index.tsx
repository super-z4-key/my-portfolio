import Head from "next/head";
import React from "react";
import { FiTwitter, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

const Contacts = () => {
  return (
    <div className="w-full h-full relative">
      <Head>
        <title>Contact Page - superzzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full flex flex-col justify-center items-center p-10 gap-4">
        <h1 className="text-slate-400 text-2xl font-mono cursor-default">let's talk with me</h1>
        <div className="text-emerald-500 text-4xl flex justify-center items-center gap-4">
          <FiTwitter className="cursor-pointer  hover:text-emerald-400 hover:-translate-y-1 transition-all delay-100"/>
          <FiGithub className="cursor-pointer  hover:text-emerald-400 hover:-translate-y-1 transition-all delay-100"/>
          <FiInstagram className="cursor-pointer  hover:text-emerald-400 hover:-translate-y-1 transition-all delay-100"/>
          <FiFacebook className="cursor-pointer  hover:text-emerald-400 hover:-translate-y-1 transition-all delay-100"/>
        </div>
        <h4 className="text-slate-500 hover:text-slate-400 font-mono self-center absolute bottom-2 tracking-widest cursor-grab">- Happy Good Day -</h4>
      </main>
    </div>
  );
};

export default Contacts;
