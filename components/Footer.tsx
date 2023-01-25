import { FiTwitter, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="container-none h-auto border-b border-slate-800 bg-slate-800">
      <nav className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center py-4 gap-2">
        <p className="md:w-4/12 text-slate-500 text-sm order-2 md:order-1">
          Copyright@ Ahmad Zaky Ubaidillah · 2023
        </p>
        <div className="md:w-4/12 flex justify-center items-center text-4xl text-slate-400 gap-2 md:order-2">
          <FiTwitter className="cursor-pointer  hover:text-slate-500 hover:-translate-y-1 transition-all delay-100" />
          <FiGithub className="cursor-pointer  hover:text-slate-500 hover:-translate-y-1 transition-all delay-100" />
          <FiInstagram className="cursor-pointer  hover:text-slate-500 hover:-translate-y-1 transition-all delay-100" />
          <FiFacebook className="cursor-pointer  hover:text-slate-500 hover:-translate-y-1 transition-all delay-100" />
        </div>
        <div className="md:w-4/12 hidden md:block md:order-3" />
      </nav>
    </div>
  );
};

export default Footer;
