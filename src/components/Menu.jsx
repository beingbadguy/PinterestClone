export const Menu = () => {
  return (
    <>
      <ul className={` hidden font-semibold text-[50px] absolute top-0 left-0 text-center bg-black text-white w-[30%] h-screen pt-[200px] md:p-0 md:w-[300px]  md:flex md:static md:text-[15px] md:text-black md:h-[50px]  md:bg-transparent md:gap-10 `}>
        <li className="rounded-3xl hover:bg-black hover:text-white text-red-500  transition-all delay-200  p-1 sm:p-3  cursor-pointer">Home</li>
        <li className="rounded-3xl hover:bg-black hover:text-white  transition-all  p-1 sm:p-3 cursor-pointer">Explore</li>
        <li className="rounded-3xl hover:bg-black hover:text-white  transition-all  p-1 sm:p-3 cursor-pointer">Create</li>
      </ul>
    </>
  );
};
