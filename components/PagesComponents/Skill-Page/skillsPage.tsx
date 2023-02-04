import {
   SiJavascript,
   SiTailwindcss,
   SiReact,
   SiNextdotjs,
   SiTypescript,
   SiGithub,
   SiHtml5,
   SiCss3,
} from "react-icons/si";
import React from "react";

const skill = () => {
   return (
      <section
         id="skills"
         className="container-none w-full h-auto border-b border-slate-800"
      >
         <div className="container mx-auto w-full py-20 py-20 flex justify-center items-center">
            <section className="w-[80%] md:w-[70%] p-1 md:p-20 flex flex-col justify-center items-center">
               <h1 className="text-emerald-400 text-md md:text-md">
                  💻 Skills Experience
               </h1>
               <h2 className="text-white text-3xl md:text-5xl font-semibold mt-5 mb-10 text-center">
                  Technologies and skills
               </h2>
               <h2 className="text-slate-500 text-lg md:text-xl mt-5 mb-3 text-center">
                  Technology I use everyday
               </h2>
               <div className="flex flex-wrap justify-center items-center my-4 gap-3">
                  <SiHtml5 className="text-slate-500 hover:text-red-500/80 w-16 h-16" />
                  <SiCss3 className="text-slate-500 hover:text-blue-600 w-16 h-16" />
                  <SiJavascript className="text-slate-500 hover:text-yellow-400/90 w-16 h-16 " />
                  <SiReact className="text-slate-500 hover:text-blue-500 w-16 h-16" />
                  <SiTailwindcss className="text-slate-500 hover:text-sky-500 w-16 h-16" />
                  <SiNextdotjs className="text-slate-500 hover:text-slate-100 rounded-full w-16 h-16 " />
                  <SiTypescript className="text-slate-500 hover:text-blue-700 w-16 h-16" />
                  <SiGithub className="text-slate-500 hover:text-purple-900/80 w-16 h-16" />
               </div>
            </section>
         </div>
      </section>
   );
};

export default skill;
