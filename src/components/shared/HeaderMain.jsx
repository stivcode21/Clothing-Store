import { IoSearchOutline } from "react-icons/io5";

const HeaderMain = () => {
    return (
        <>
            {/* Title and Search */}
            <div className="flex flex-col gap-4 mb-5 md:flex-row md:justify-between md:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-text">Cloting Store</h1>
                    <p className="text-gray-800">27/07/24</p>
                </div>
                <form >
                    <div className="w-full relative">
                        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-text" />
                        <input type="text" placeholder="Search"
                            className="w-full py-2 pl-10 pr-4 bg-secondary shadow-lg rounded-lg text-text outline-none placeholder:text-gray-500 border-b-gray-900"
                        />
                    </div>
                </form>
            </div>
            {/* Tabs */}
            <nav className="flex items-center text-text border-b border-gray-700 pb-[1px] mb-5 justify-between md:justify-start">
                <a href="#" className="border-b-[2px] py-2 pr-5 border-accent text-accent ">Sets</a>
                <a href="#" className="hover:border-b-[2px] border-accent hover:text-accent py-2 pr-5 transition-all">Shirts</a>
                <a href="#" className="hover:border-b-[2px] border-accent hover:text-accent py-2 pr-5 transition-all">Shorts</a>
                <a href="#" className="hover:border-b-[2px] border-accent hover:text-accent py-2 pr-5 transition-all">Hoodie</a>
                <a href="#" className="hover:border-b-[2px] border-accent hover:text-accent py-2 pr-5 transition-all">Bags</a>
            </nav>
        </>
    )
}

export default HeaderMain