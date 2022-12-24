import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Hamburger from "./Hamburger";
import { RoutePath } from "../db/RoutePath";

type Props = {
  buttonHandleNav: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleNavValue: boolean;
};

const Sidebar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="absolute flex flex-row justify-center items-center w-full h-full top-0">
      <div
        onClick={props.buttonHandleNav}
        className={
          props.handleNavValue
            ? "absolute w-full h-full backdrop-blur-sm z-20 md:hidden transition-all duration-700 delay-75 ease-in"
            : "absolute w-full h-full backdrop-blur-0 -z-0 md:hidden transition-all duration-1000 delay-200 ease-out"
        }
      />
      <section
        className={
          props.handleNavValue
            ? "absolute md:hidden h-full w-[50%] top-0 right-0 flex flex-col justify-center items-center bg-slate-800 translate-x-0 transition-all duration-700 delay-100 z-30 border-l border-slate-700"
            : "absolute md:hidden h-full w-[50%] top-0 right-0 flex flex-col justify-center items-center bg-slate-800 translate-x-[100%] transition-all duration-700 delay-100 z-30 border-l border-slate-700"
        }
      >
        <div className="h-[10%] w-full pr-4 flex justify-end items-center">
          <Hamburger
            bgHamburger="bg-emerald-400"
            buttonHandleNav={props.buttonHandleNav}
            widthOne="w-[40px]"
            widthSecond="w-[30px]"
            widthThird="w-[25px]"
          />
        </div>
        <ul className="h-[90%] w-full flex flex-col justify-evenly items-center">
          {RoutePath.map((data, index) => {
            return (
              <li key={index}>
                <Link
                  href={data.path}
                  className={
                    router.pathname === data.path
                      ? "text-emerald-400 font-mono border border-emerald-400 w-[100px] h-[33px] rounded-lg flex justify-center items-center tracking-wider"
                      : "text-slate-400 font-mono border border-slate-400 w-[100px] h-[33px] rounded-lg flex justify-center items-center tracking-wider"
                  }
                >
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
