import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Input } from "./Input";
import { Icons } from "./Icons";
import { Hamburger } from "./Hamburger";

export const Nav = () => {

  return (
    <div className="flex items-center justify-between gap-10 ml-[30px] sm:ml-[80px] sm:mr-[30px] mr-[50px] mt-[20px]">
      <Logo></Logo>

      <Menu></Menu>
      <Input></Input>
      <Icons></Icons>
      <Hamburger></Hamburger>
    </div>
  );
};
