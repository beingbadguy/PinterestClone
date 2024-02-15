import { MdNotificationsActive } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export const Icons = () => {
  return (
    <div className=" items-center gap-10 hidden md:flex  ">
      <MdNotificationsActive className=" sm:h-[15px] md:h-[25px] cursor-pointer" />
      <IoChatbubbleEllipses className="sm:h-[15px] md:h-[25px] cursor-pointer" />
      <FaUser className="sm:h-[15px] md:h-[25px] cursor-pointer" />
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
