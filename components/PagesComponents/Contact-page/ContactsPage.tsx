import Link from "next/link";
import { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineCopy } from "react-icons/ai";
import { BsWhatsapp, BsFillFileArrowUpFill } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactsPage = () => {
   const email = "emailexample123@gmail.com";
   const [copied, setCopied] = useState(false);
   const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 500);
   };
   return (
      <div
         id="contact"
         className="container-none w-full py-20 flex justify-center items-center"
      >
         <div className="container h-full mx-auto flex justify-center items-center">
            <div className="w-full h-full px-3 flex flex-col justify-center items-start md:items-center gap-4">
               <p className="text-emerald-400">📬 Contacts</p>
               <p className="text-white text-4xl mb-2 md:text-5xl font-semibold">
                  Let's talk about it
               </p>
               <section className="md:flex justify-center items-center md:gap-16 text-2xl md:my-5 ">
                  <div className="inline-flex border border-slate-500  text-slate-500 py-1.5 px-4 rounded-2xl gap-3 my-2">
                     <div>
                        <BsWhatsapp className="text-3xl cursor-pointer hover:text-slate-400" />
                     </div>
                     <p>Let's talk about it.</p>
                  </div>
                  <div className="text-slate-500 mt-4 mb-10 md:flex md:flex-col md:justify-center md:items-center text-2xl">
                     <RiSendPlaneLine className="text-3xl cursor-pointer hover:text-slate-400" />
                     <p>Email:</p>
                     <div className="flex flex-wrap md:flex-col md:items-center gap-2">
                        <p className="text-slate-400">{email}</p>
                        <div className=" relative">
                           <CopyToClipboard text={email}>
                              <AiOutlineCopy
                                 onClick={handleCopy}
                                 className="text-3xl cursor-pointer hover:text-slate-400"
                              />
                           </CopyToClipboard>
                           {copied ? (
                              <div className="absolute -top-10 -right-10 text-slate-300 text-sm px-2 mt-2  border-slate-500 rounded-lg bg-slate-800">
                                 Copied!
                              </div>
                           ) : (
                              ""
                           )}
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
