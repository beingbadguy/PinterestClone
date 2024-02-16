import { forwardRef, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";

export const Hamburger = ({ eventClickref, alt }) => {
  const myref = useRef();

  let eventHandle = () => {
    eventClickref.current.classList.toggle("translate-x-[00px]");
    alt.current.classList.toggle("hidden");
    // myref.current.classList.toggle("text-red-500");
  };
  return (
    <div ref={alt} onClick={eventHandle} className="">
      <CiMenuFries className="h-[35px] w-[35px] md:hidden  cursor-pointer" />
      {/* <img src="../../dist/menu.png" className="h-[30px] lg:hidden  cursor-pointer" /> */}
    </div>
  );
};
