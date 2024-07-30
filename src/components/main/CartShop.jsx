import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export const CartShop = (props) => {

    const { toggleOrder } = props;

    return (
        <>
            {/* cart */}
            <div className="relative p-4 text-gray-300 h-full">
                <button onClick={toggleOrder}>
                    <AiOutlineClose className="absolute right-2 top-2 box-content p-3 text-gray-300 rounded-full bg-[#262837] text-xl" />
                </button>
                <h1 className="text-2xl font-semibold pb-4">Order<span className="pl-2">#100102</span></h1>
                {/* citys */}
                <div className="flex items-center gap-4 mb-2">
                    <button className="bg-[#c70039] text-white py-2 px-4 rounded-xl">
                        Medellin
                    </button>
                    <button className=" text-[#c70039] py-2 px-4 rounded-xl border border-gray-500">
                        cali
                    </button>
                    <button className=" text-[#c70039] py-2 px-4 rounded-xl border border-gray-500">
                        manizales
                    </button>
                </div>

                {/* cart subtitle */}
                <div>
                    <div className="flex justify-between items-center mb-2 py-3 px-5 border-b border-b-gray-700">
                        <h5 >Item</h5>
                        <div className="flex gap-10">
                            <h5 >Qty</h5> <h5 >Price</h5>
                        </div>
                    </div>
                </div>

                <div className="h-[310px] overflow-y-auto">
                    {/*container*/}

                    <div className=" bg-[#1f1d2b] p-6 sm:p-4 rounded-xl border-b border-b-[#6e0321] mb-4">
                        {/* description */}
                        <div className="flex justify-between mb-3">
                            <div className=" flex items-center gap-3">
                                <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                                    className="w-10 h-10 object-cover rounded-full" />
                                <div>
                                    <h5 className="text-sm">nike black white</h5>
                                    <p className="text-sm text-gray-500">$79.99</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 text-center">
                                {/* Qty */}
                                <div className="py-2 px-4 text-lg bg-[#262837] rounded-lg">
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$79.99</span>
                                </div>
                            </div>
                        </div>

                        {/* note */}
                        <div className="flex items-center gap-4">
                            <form className="w-full">
                                <input type="text"
                                    className="bg-[#262837] text-md w-full py-2 px-4 rounded-lg outline-none"
                                    placeholder="Order note..."
                                />
                            </form>
                            <div className="mr-1">
                                <button className="text-center text-[#c70039] p-2 border border-[#c70039] rounded-lg box-content">
                                    <RiDeleteBin6Line className="text-xl" />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/*container product*/}
                    <div className=" bg-[#1f1d2b] p-6 sm:p-4 rounded-xl border-b border-b-[#6e0321] mb-4">

                        {/* description */}
                        <div className="flex justify-between mb-3">
                            <div className=" flex items-center gap-3">
                                <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                                    className="w-10 h-10 object-cover rounded-full" />
                                <div>
                                    <h5 className="text-sm">nike black white</h5>
                                    <p className="text-sm text-gray-500">$79.99</p>
                                </div>
                            </div>

                            {/* tags */}
                            <div className="flex items-center gap-5 text-center">
                                {/* Qty */}
                                <div className="py-2 px-4 text-lg bg-[#262837] rounded-lg">
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$79.99</span>
                                </div>
                            </div>
                        </div>

                        {/* note */}
                        <div className="flex items-center gap-4">
                            <form className="w-full">
                                <input type="text"
                                    className="bg-[#262837] text-md w-full py-2 px-4 rounded-lg outline-none"
                                    placeholder="Order note..."
                                />
                            </form>
                            <div className="mr-1">
                                <button className="text-center text-[#c70039] p-2 border border-[#c70039] rounded-lg box-content">
                                    <RiDeleteBin6Line className="text-xl" />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/*container product*/}
                    <div className=" bg-[#1f1d2b] p-6 sm:p-4 rounded-xl border-b border-b-[#6e0321] mb-4">

                        {/* description */}
                        <div className="flex justify-between mb-3">
                            <div className=" flex items-center gap-3">
                                <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                                    className="w-10 h-10 object-cover rounded-full" />
                                <div>
                                    <h5 className="text-sm">nike black white</h5>
                                    <p className="text-sm text-gray-500">$79.99</p>
                                </div>
                            </div>

                            {/* tags */}
                            <div className="flex items-center gap-5 text-center">
                                {/* Qty */}
                                <div className="py-2 px-4 text-lg bg-[#262837] rounded-lg">
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$79.99</span>
                                </div>
                            </div>
                        </div>

                        {/* note */}
                        <div className="flex items-center gap-4">
                            <form className="w-full">
                                <input type="text"
                                    className="bg-[#262837] text-md w-full py-2 px-4 rounded-lg outline-none"
                                    placeholder="Order note..."
                                />
                            </form>
                            <div className="mr-1">
                                <button className="text-center text-[#c70039] p-2 border border-[#c70039] rounded-lg box-content">
                                    <RiDeleteBin6Line className="text-xl" />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/*container product*/}
                    <div className=" bg-[#1f1d2b] p-6 sm:p-4 rounded-xl border-b border-b-[#6e0321] mb-4">

                        {/* description */}
                        <div className="flex justify-between mb-3">
                            <div className=" flex items-center gap-3">
                                <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                                    className="w-10 h-10 object-cover rounded-full" />
                                <div>
                                    <h5 className="text-sm">nike black white</h5>
                                    <p className="text-sm text-gray-500">$79.99</p>
                                </div>
                            </div>

                            {/* tags */}
                            <div className="flex items-center gap-5 text-center">
                                {/* Qty */}
                                <div className="py-2 px-4 text-lg bg-[#262837] rounded-lg">
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$79.99</span>
                                </div>
                            </div>
                        </div>

                        {/* note */}
                        <div className="flex items-center gap-4">
                            <form className="w-full">
                                <input type="text"
                                    className="bg-[#262837] text-md w-full py-2 px-4 rounded-lg outline-none"
                                    placeholder="Order note..."
                                />
                            </form>
                            <div className="mr-1">
                                <button className="text-center text-[#c70039] p-2 border border-[#c70039] rounded-lg box-content">
                                    <RiDeleteBin6Line className="text-xl" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


                {/* submit payment */}
                <div className="bg-[#1f1d2b] sticky w-full bottom-0 left-0 py-3">
                    <div className="bg-[#262837] p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Discount</span>
                            <span>$0</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Subtotal</span>
                            <span>$79.99</span>
                        </div>
                        <div>
                            <button className="bg-[#c70039] w-full py-2 px-4 rounded-lg">
                                Continue to payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
