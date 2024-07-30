import Sidebar from "./components/main/Sidebar"
import SidebarMobile from "./components/main/SidebarMobile";
import MainContent from "./components/main/MainContent";

import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false)
  }

  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      {/* sidebar */}
      <Sidebar showMenu={showMenu} toggleOrder={toggleOrder} />

      {/* sidebar Mobile */}
      <SidebarMobile showMenu={showMenu} toggleOrder={toggleOrder} toggleMenu={toggleMenu} />

      <main className="lg:pl-[90px] grid grid-cols-1 lg:grid-cols-8 xl:pb-0">
        {/* main content */}
        <MainContent showOrder={showOrder} />

        {/* buys cars */}
        <div className={`bg-[#1f1d2b] md:col-span-2 fixed lg:right-0 lg:w-[350px] top-0 w-full h-full transition-all
          ${showOrder ? "right-0" : "-right-full"} ${showOrder ? "lg:col-span-2" : "hidden"}`}>
          {/* Orders */}
          <div className="relative pt-2 p-4 text-gray-300 h-full">
            <button onClick={toggleOrder}>
              <AiOutlineClose
                className="absolute right-2 top-2 box-content p-3 text-gray-300 rounded-full bg-[#262837] text-xl" />
            </button>
            <h1 className="text-2xl font-semibold my-4">Order <span className="pl-2">#100102</span></h1>
            {/* citys */}
            <div className="flex items-center gap-4 mb-6">
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

            {/* card subtitle */}
            <div>
              <div className="flex justify-between items-center mb-2 py-3 px-5 border-b border-b-gray-700">
                <h5 >Item</h5>
                <div className="flex gap-10">
                  <h5 >Qty</h5> <h5 >Price</h5>
                </div>
              </div>
            </div>

            <div className="h-[300px] sm:h-[290px] overflow-y-auto">
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
        </div>
      </main>

    </div>
  )
}

export default App
