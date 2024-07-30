import { IoSearchOutline } from "react-icons/io5";

const HeaderMain = () => {
    return (
        <>
            {/* Title and Search */}
            <div className="flex flex-col gap-4 mb-5 md:flex-row md:justify-between md:items-center">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-300">Cloting Store</h1>
                    <p className="text-gray-500">27/07/24</p>
                </div>
                <form >
                    <div className="w-full relative">
                        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input type="text" placeholder="Search"
                            className="w-full py-2 pl-10 pr-4 bg-[#1f1d2b] rounded-lg text-gray-300 outline-none"
                        />
                    </div>
                </form>
            </div>
            {/* Tabs */}
            <nav className="flex items-center text-white border-b border-gray-700 pb-[1px] mb-5 justify-between md:justify-start">
                <a href="#" className="border-b-[2px] py-2 pr-5 border-[#c70039] text-[#c70039] ">Sets</a>
                <a href="#" className="hover:border-b-[2px] border-[#c70039] hover:text-[#c70039] py-2 pr-5 transition-all">Shirts</a>
                <a href="#" className="hover:border-b-[2px] border-[#c70039] hover:text-[#c70039] py-2 pr-5 transition-all">Shorts</a>
                <a href="#" className="hover:border-b-[2px] border-[#c70039] hover:text-[#c70039] py-2 pr-5 transition-all">Hoodie</a>
                <a href="#" className="hover:border-b-[2px] border-[#c70039] hover:text-[#c70039] py-2 pr-5 transition-all">Bags</a>
            </nav>
        </>
    )
}

export default HeaderMain