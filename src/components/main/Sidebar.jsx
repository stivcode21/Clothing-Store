import { HiHome } from "react-icons/hi2";
import { IoStorefrontOutline, IoCartOutline, IoMailOutline } from "react-icons/io5";
import { PiUserCircleDashedLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { RxExit } from "react-icons/rx";


const Sidebar = (props) => {

    const { showMenu, toggleOrder } = props;

    return (
        <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-[90px] h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl z-50 transition-all
        ${showMenu ? "left-0" : "-left-full"} `
        }>
            <div>
                <ul className="pl-3" >
                    <li className=" pb-4 flex justify-center">
                        <IoStorefrontOutline className="text-5xl text-white cursor-pointer" />
                    </li>
                    <li className="bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl">
                        <a href="#" className="bg-[#c70039] p-3.5 flex justify-center rounded-lg">
                            <HiHome className="text-white text-2xl" />
                        </a>
                    </li>

                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-[#c70039] p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <IoCartOutline onClick={toggleOrder} className=" group-hover:text-white text-[#c70039] text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-[#c70039] p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <IoMailOutline className=" group-hover:text-white text-[#c70039] text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-[#c70039] p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <PiUserCircleDashedLight className=" group-hover:text-white text-[#c70039] text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-[#c70039] p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <CiSettings className=" group-hover:text-white text-[#c70039] text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="pl-3">
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-[#c70039] p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <RxExit className=" group-hover:text-white text-[#c70039] text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;