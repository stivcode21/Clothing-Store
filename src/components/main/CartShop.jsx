import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import ticket from '../../database/ticket.json';

export const CartShop = (props) => {

    const { toggleOrder } = props;

    return (
        <>
            {/* cart */}
            <div className="relative p-4 text-gray-300 h-full">
                <button onClick={toggleOrder}>
                    <AiOutlineClose className="absolute right-2 top-2 box-content p-3 text-gray-300 rounded-full bg-primary text-xl" />
                </button>
                <h1 className="text-2xl font-semibold pb-4">Order<span className="pl-2">#100102</span></h1>
                {/* citys */}
                <div className="flex items-center gap-4 mb-2">
                    <button className="w-40 h-10 sm:py-4 sm:px-8 lg:py-2 lg:px-1 rounded-xl border flex justify-center items-center border-gray-500 hover:bg-gray-300 transition-all">
                        <img src="https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png" className="object-cover w-[60px] lg:w-[400px]" alt="" />
                    </button>
                    <button className="w-40 h-10 sm:py-4 sm:px-8 lg:py-2 lg:px-2 rounded-xl border flex justify-center items-center border-gray-500 hover:bg-gray-300 transition-all">
                        <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" className="object-cover w-[60px] lg:w-[400px]" alt="" />
                    </button>
                    <button className="w-40 h-10 sm:py-4 sm:px-8 lg:py-2 lg:px-1 rounded-xl border flex justify-center items-center border-gray-500 hover:bg-gray-300 transition-all">
                        <img src="https://seeklogo.com/images/P/pse-logo-4AE3A79534-seeklogo.com.png" className="object-cover w-[50px] lg:w-[500px]" alt="" />
                    </button>
                    <button className="w-40 h-10 sm:py-4 sm:px-8 lg:py-2 lg:px-2 rounded-xl border flex justify-center items-center border-gray-500 hover:bg-gray-300 transition-all">
                        <img src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1225-3kb6axel.png" className="object-cover w-[40px] lg:w-[400px]" alt="" />
                    </button>
                    <button className="w-40 h-10 sm:py-4 sm:px-6 lg:py-2 lg:px-2 rounded-xl border flex justify-center items-center border-gray-500 hover:bg-gray-300 transition-all">
                        <img src="https://i.pinimg.com/originals/b8/cd/c1/b8cdc1ad498fe080bc21bb5a03c24f83.png" className="object-cover w-[70px] sm:w-[600px]" alt="" />
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
                    <div className=" bg-secondary p-6 sm:p-4 rounded-xl border-y border-y-gray-900 mb-4">
                        {/* description */}
                        <div className="flex justify-between mb-3">

                            <div className=" flex items-center gap-3">
                                <img src={ticket.imgPrevie}
                                    className="w-10 h-10 object-cover rounded-full" />
                                <div>
                                    <h5 className="text-sm text-white">{ticket.marca}</h5>
                                    <p className="text-sm text-gray-500">{ticket.precie}</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-5 text-center">
                                {/* Qty */}
                                <div className="py-2 px-4 text-lg bg-primary rounded-lg border border-gray-900">
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$79.99</span>
                                </div>
                            </div>
                        </div>

                        {/* imput note */}
                        <div className="flex items-center gap-4">
                            <form className="w-full">
                                <input type="text"
                                    className="bg-primary text-md w-full py-2 px-4 rounded-lg outline-none border-y border-y-accent"
                                    placeholder="Order note..." />
                            </form>
                            <div className="mr-1">
                                <button className="text-center text-red-600 p-2 border border-red-600 rounded-lg box-content">
                                    <RiDeleteBin6Line className="text-xl" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


                {/* submit payment */}
                <div className="bg-secondary sticky w-full bottom-0 left-0 py-3">
                    <div className="bg-primary p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Discount</span>
                            <span>$0</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Subtotal</span>
                            <span>$79.99</span>
                        </div>
                        <div>
                            <button className="bg-accent w-full py-2 px-4 rounded-lg">
                                Continue to payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
