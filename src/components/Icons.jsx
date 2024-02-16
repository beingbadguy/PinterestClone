import { MdNotificationsActive } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export const Icons = () => {
  return (
    <div className=" items-center gap-7 hidden md:flex   ">
      <MdNotificationsActive className=" md:h-[25px] md:w-[25px] sm:h-[20px] w-[20px]   cursor-pointer" />
      <IoChatbubbleEllipses className=" md:h-[25px] md:w-[25px] sm:h-[20px] sm:w-[20px]   cursor-pointer" />
      <FaUser className=" md:h-[25px] md:w-[25px] sm:h-[20px] sm:w-[20px]    cursor-pointer" />

      {/* sm:h-[25px] md:h-[25px] */}
      {/* <img
        src="../../dist/notification.png"
        alt=""
        className="sm:h-[15px] md:h-[25px] cursor-pointer "
      />
      <img
        src="../../dist/chat.png"
        alt=""
        className="sm:h-[15px] md:h-[25px] cursor-pointer"
      />
      <img
        src="../../dist/user.png"
        alt=""
        className="sm:h-[15px] md:h-[25px] cursor-pointer"
      /> */}
    </div>
  );
};
