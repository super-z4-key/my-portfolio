import Link from "next/link";
import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineCopy } from "react-icons/ai";
import { BsWhatsapp, BsFillFileArrowUpFill } from "react-icons/bs";

const ContactsPage = () => {
  return (
    <div
      id="contact"
      className="container-none w-full min-h-screen flex justify-center items-center"
    >
      <div className="container h-full mx-auto flex justify-center items-center">
        <div className="w-full h-full px-3 flex flex-col justify-center items-start md:items-center gap-4">
          <p className="text-emerald-400">📬 Contacts</p>
          <p className="text-white text-4xl md:text-5xl font-semibold">
            {"between "}
            <br className="md:hidden" />
            my contacts
          </p>
          <section className="md:flex justify-center items-center md:gap-16 text-2xl md:my-5">
            <div className="inline-flex text-slate-500 border border-slate-500 py-2 px-4 rounded-xl gap-3 my-2">
              <div>
                <BsWhatsapp className="text-3xl cursor-pointer hover:text-slate-400" />
              </div>
              <p>Let's talk about it.</p>
            </div>
            <div className="text-slate-500 mt-4 mb-10 md:flex md:flex-col md:justify-center md:items-center text-2xl">
              <RiSendPlaneLine className="text-3xl cursor-pointer hover:text-slate-400" />
              <p>Email:</p>
              <div className="flex flex-wrap md:flex-col md:items-center gap-2">
                <p className="text-slate-400">emailemailemail@gmail.com</p>
                <div>
                  <AiOutlineCopy className="text-3xl cursor-pointer hover:text-slate-400" />
                </div>
              </div>
            </div>
          </section>
          <div className="text-slate-500 text-2xl inline-flex gap-2">
            Back to top
            <Link href="/#">
              <BsFillFileArrowUpFill className="text-3xl cursor-pointer hover:text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
