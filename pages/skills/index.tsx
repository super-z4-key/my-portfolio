import Head from "next/head";
import Link from "next/link";
import React from "react";
import { SkillData } from "../../db/SkillDatas";

const skills = () => {
  return (
    <div className="w-full h-full relative">
      <Head>
        <title>Skill Page - superzzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-start space-y-1 max-w-[90%] max-h-[90%]">
          <h3 className="text-slate-400 cursor-default">
            Here are a few technologies I’ve been working with recently :
          </h3>
          <ul>
            {SkillData.map((data, index) => {
              return (
                <li
                  key={index}
                  className="text-slate-400 hover:text-emerald-500 list-disc list-inside cursor-default"
                >
                  {data.title}
                </li>
              );
            })}
          </ul>
        </section>
        <h4 className="text-slate-500 hover:text-slate-400 font-mono self-center absolute bottom-2 cursor-pointer">
          <Link href="/contacts">- let's to my contact -</Link>
        </h4>
      </main>
    </div>
  );
};

export default skills;
