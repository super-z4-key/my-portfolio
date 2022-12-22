import React from "react";

type Props = {
  bgHamburger: String;
  buttonHandleNav: any;
  widthOne: String;
  widthSecond: String;
  widthThird: String;
};

const Hamburger = (props: Props) => {
  return (
    <div
      onClick={props.buttonHandleNav}
      className="flex flex-col justify-center items-end gap-[4px] h-auto w-auto cursor-pointer"
    >
      <div
        className={`${props.widthOne} h-[3px] ${props.bgHamburger} rounded-lg`}
      />
      <div
        className={`${props.widthSecond} h-[3px] ${props.bgHamburger} rounded-lg`}
      />
      <div
        className={`${props.widthThird} h-[3px] ${props.bgHamburger} rounded-lg`}
      />
    </div>
  );
};

export default Hamburger;
