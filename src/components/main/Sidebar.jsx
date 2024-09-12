import { HiHome } from "react-icons/hi2";
import { IoStorefrontOutline, IoCartOutline, IoMailOutline } from "react-icons/io5";
import { PiUserCircleDashedLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { RxExit } from "react-icons/rx";


const Sidebar = (props) => {

    const { showMenu, toggleOrder, showOrder } = props;

    return (
        <div className={`bg-secondary fixed lg:left-0 top-0 w-[80px] h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl z-50 transition-all shadow-2xl  border-r-gray-800
        ${showMenu ? "left-0" : "-left-full"} `
        }>
            <div >
                <ul>
                    <li className="pb-4 flex justify-center">
                        <IoStorefrontOutline className="text-5xl text-text cursor-pointer" />
                    </li>
                    <li className="bg-primary p-3 rounded-tl-xl rounded-bl-xl">
                        <a href="#" className="bg-accent p-3.5 flex justify-center rounded-lg">
                            <HiHome className="text-white text-2xl" />
                        </a>
                    </li>

                    <li className={`hover:bg-primary p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in
                        ${showOrder ? "bg-primary" : "bg-secondary"}`
                    }>
                        <a href="#" onClick={toggleOrder} className={`group-hover:bg-accent p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in
                            ${showOrder ? "bg-accent text-white" : "bg-secondary text-accent"}`
                        }>
                            <IoCartOutline className=" group-hover:text-white text-2xl transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                    <li className="hover:bg-primary p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-accent p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <IoMailOutline className=" group-hover:text-white text-accent text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                    <li className="hover:bg-primary p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-accent p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <PiUserCircleDashedLight className=" group-hover:text-white text-accent text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                    <li className="hover:bg-primary p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-accent p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <CiSettings className=" group-hover:text-white text-accent text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul >
                    <li className="hover:bg-primary p-3 rounded-tl-xl rounded-bl-xl group transition-colors duration-200 ease-in">
                        <a href="#" className="group-hover:bg-accent p-3.5 flex justify-center rounded-lg transition-colors duration-200 ease-in">
                            <RxExit className=" group-hover:text-white text-accent text-2xl  transition-colors duration-200 ease-in" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;