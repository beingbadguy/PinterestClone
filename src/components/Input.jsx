import { CiSearch } from "react-icons/ci";
export const Input = () => {
  return (
    <>
      <div className="bg-gray-200 h-[50px] w-[300px] sm:w-[500px] md:w-[350px] rounded-3xl flex items-center  ">
        <CiSearch className="md:h-[40px] md:w-[40px] sm:h-[40px] sm:w-[40px]  h-[40px] w-[40px] m-4 " />
        {/* <img src="../../dist/search.png" alt="" className="h-[30px] w-[30px] m-4 " /> */}
        <input type="text" placeholder="Search here..." className="p-3 sm:w-[200px] md:w-[200px] lg:w-[500px]  w-[200px]   focus:outline-none hover:border-none bg-transparent text-black font-thin " />
      </div>
    </>
  );
};
