import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const _MenuItems = [
    {
      label: "Home",
      url: "/#",
    },
    {
      label: "About Me",
      url: "/#about-me",
    },
    {
      label: "Skills",
      url: "/#skills",
    },
    {
      label: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <div className="fixed mx-auto w-full h-auto hidden md:block pt-3 backdrop-blur-sm bg-slate-900/90">
      <nav className="container mx-auto w-full py-2 md:flex justify-between items-center px-4">
        <div className="text-emerald-400 text-2xl font-bold cursor-default">
          Z
        </div>
        <ul className="hidden md:flex justify-beetwen gap-14">
          {_MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.url}
                  className={
                    router.asPath === item.url
                      ? "text-emerald-400 tracking-widest"
                      : "text-slate-300 tracking-widest"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
