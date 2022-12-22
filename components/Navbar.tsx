import Link from "next/link";
import { useRouter } from "next/router";
import { RoutePath } from "../db/RoutePath";
import Hamburger from "./Hamburger";

type Props = {
  buttonHandleNav: Function;
  handleNavValue: boolean;
};

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full h-[10%] flex justify-between items-center px-4 bg-slate-900 z-10 relative">
      <div className="text-emerald-400 md:ml-5 text-2xl font-mono cursor-default">SUPER'Z</div>
      <div className="h-full w-full flex md:hidden justify-end items-center">
        <Hamburger
          bgHamburger={
            props.handleNavValue
              ? "bg-transparent transition-all duration-500"
              : "bg-slate-300 transition-all duration-1000 delay-500"
          }
          buttonHandleNav={props.buttonHandleNav}
          widthOne="w-[25px]"
          widthSecond="w-[25px]"
          widthThird="w-[25px]"
        />
      </div>
      <ul className="hidden md:flex justify-beetwen gap-16 mr-5">
        {RoutePath.map((data, index) => {
          return (
            <li key={index}>
              <Link
                href={data.path}
                className={
                  router.pathname === data.path
                    ? "text-emerald-400 font-mono tracking-widest"
                    : "text-slate-300  font-mono tracking-widest"
                }
              >
                {data.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
