import React from "react";
import { BsDownload } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Email = () => {
  return (
    <div className="flex  md:flex-col md:items-end gap-2 md:gap-4">
      <section className="border border-slate-500 rounded-lg flex justify-center items-center flex-wrap px-3 gap-1 md:gap-2">
        <p className="text-slate-500 px-1 text-lg md:text-2xl">email me at</p>
        <TfiEmail className="my-auto py-1 text-slate-500 text-2xl md:text-3xl cursor-pointer hover:text-slate-400" />
      </section>
      <section className="border border-slate-500 rounded-lg flex justify-center items-center flex-wrap px-3 gap-1 md:gap-2">
        <p className="text-slate-500 border-slate-500 rounded-lg px-1 text-lg md:text-2xl">
          let's go to my cv
        </p>
        <BsDownload className="my-auto py-1 text-slate-500 text-2xl md:text-3xl cursor-pointer hover:text-slate-400" />
      </section>
    </div>
  );
};

export default Email;
