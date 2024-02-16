// import { useRef } from "react";

export const Menu = ({ myref }) => {
  // console.log(myref.current);
  return (
    <>
      <ul
        ref={myref}
        className={` text-[20px] w-[50%] font-semibold   absolute top-0 left-0 translate-x-[-400px] transition-all md:translate-x-[0px]
      text-center bg-black text-white h-screen pt-[200px] md:p-0 md:w-[250px]  md:flex md:static md:text-[15px] md:text-black md:h-[50px]  md:bg-transparent md:gap-10 `}>
        <li className="rounded-3xl hover:bg-black hover:text-white text-red-500  transition-all p-1 sm:p-3  cursor-pointer">Home</li>
        <li className="rounded-3xl hover:bg-black hover:text-white  transition-all  p-1 sm:p-3 cursor-pointer">Explore</li>
        <li className="rounded-3xl hover:bg-black hover:text-white  transition-all  p-1 sm:p-3 cursor-pointer">Create</li>
      </ul>
    </>
  );
};
