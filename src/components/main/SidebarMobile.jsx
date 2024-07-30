import { RiMenu3Fill } from "react-icons/ri";
import { PiUserCircleDashedLight, PiHeadset } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const SidebarMobile = (props) => {

    const { showMenu, toggleOrder, toggleMenu } = props;

    return (
        <>
            {/* sidebar Mobile */}
            <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500 py-4 px-10 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
                <button className='hover:text-white'>
                    <PiUserCircleDashedLight />
                </button>
                <button className='hover:text-white p-2'>
                    <IoCartOutline onClick={toggleOrder} />
                </button>
                <button className='hover:text-white p-2'>
                    <PiHeadset />
                </button>
                <button onClick={toggleMenu} className='text-white p-2'>
                    {showMenu ? <AiOutlineClose /> : <RiMenu3Fill />}
                </button>
            </nav>
        </>
    )
}

export default SidebarMobile