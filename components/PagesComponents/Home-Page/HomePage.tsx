import React from "react";
import Avatar from "./Items/Avatar";
import Email from "./Items/Email";
import SocilaMedia from "./Items/SocilaMedia";
import Title from "./Items/Title";

const MobileMode = () => {
   return (
      <section
         id="home"
         className="container-none w-full h-auto border-b border-slate-800"
      >
         <div className="container mx-auto flex w-full flex-col md:flex-row justify-between items-center py-20">
            <div className="mb-2 md:order-2 flex md:hidden ">
               <SocilaMedia display="justify-center flex" />
            </div>
            <div className="px-16 my-4 md:order-3 md:my-0 md:ml-4 md:w-4/12 md:p-10">
               <Avatar />
            </div>
            <div className="self-start ml-2 md:ml-0 md:self-center my-4 md:order-1 md:w-4/12">
               <Title />
               <SocilaMedia display="justify-start hidden md:flex mt-2" />
            </div>
            <div className="mt-3 md:order-4 md:w-4/12">
               <Email />
            </div>
         </div>
      </section>
   );
};

export default MobileMode;
