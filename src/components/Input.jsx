export const Input = () => {
  return (
    <>
      <div className="bg-gray-200 h-[50px] w-[200px] sm:w-[500px] rounded-3xl flex items-center   ">
        <img
          src="../../dist/search.png"
          alt=""
          className="h-[30px] w-[30px] m-4 "
        />
        <input
          type="text"
          placeholder="Search here..."
          className="p-3 sm:w-[200px] md:w-[300px] lg:w-[500px]  w-[200px]   focus:outline-none hover:border-none bg-transparent text-black font-thin "
        />
      </div>
    </>
  );
};
