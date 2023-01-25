import { FiTwitter, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

type Props = {
  display: string;
};

const SocilaMedia = (props: Props) => {
  const { display } = props;
  return (
    <div
      className={`${display} text-slate-500 text-3xl md:text-3xl items-center gap-3`}
    >
      <FiTwitter className="cursor-pointer  hover:text-slate-400 hover:-translate-y-1 transition-all delay-100" />
      <FiGithub className="cursor-pointer  hover:text-slate-400 hover:-translate-y-1 transition-all delay-100" />
      <FiInstagram className="cursor-pointer  hover:text-slate-400 hover:-translate-y-1 transition-all delay-100" />
      <FiFacebook className="cursor-pointer  hover:text-slate-400 hover:-translate-y-1 transition-all delay-100" />
    </div>
  );
};
export default SocilaMedia;
