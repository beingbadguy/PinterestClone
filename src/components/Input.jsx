import { CiSearch } from "react-icons/ci";
export const Input = ({ alt,formfocus }) => {
  let focusEvent = () => {
    alt.current.classList.toggle("hidden");
  };
  let blurEvent = () => {
    alt.current.classList.remove("hidden");
  };

  return (
    <>
      <div className="bg-gray-200 h-[50px] ml-[10px] w-[200px] sm:w-[400px] md:w-[320px] rounded-3xl flex items-center ">
        <CiSearch className="md:h-[40px] md:w-[40px] sm:h-[40px] sm:w-[40px]  h-[50px] w-[50px] m-4 " />
        {/* <img src="../../dist/search.png" alt="" className="h-[30px] w-[30px] m-4 " /> */}
        <input ref={alt}  onFocus={focusEvent} onBlur={blurEvent} type="text" placeholder="Search here..." className="p-3 sm:w-[400px] md:w-[200px] lg:w-[500px]  w-[150px]   focus:outline-none hover:border-none bg-transparent text-black font-thin " />
      </div>
    </>
  );
};
