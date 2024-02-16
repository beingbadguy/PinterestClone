import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Input } from "./Input";
import { Icons } from "./Icons";
import { Hamburger } from "./Hamburger";
// import { useEffect, useState } from "react";
import { useRef } from "react";

export const Nav = ({ formfocus }) => {
  const NewRef = useRef();
  // console.log(formfocus.current);

  return (
    <div className="flex items-center justify-between gap-10 ml-[30px] sm:ml-[80px] sm:mr-[30px] mr-[50px] mt-[20px]  max-w-[100%]">
      <Logo></Logo>
      <Menu myref={NewRef}></Menu>
      <Input alt={formfocus}></Input>
      <Icons></Icons>
      <Hamburger eventClickref={NewRef} alt={formfocus}></Hamburger>
    </div>
  );
};
