import Image from "next/image";
import AvatarIcons from "../../../../assets/AvatarIcons.svg";

const Avatar = () => {
  return (
    <>
      <Image src={AvatarIcons} alt="image" className="w-full" />
    </>
  );
};

export default Avatar;
