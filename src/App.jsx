import Sidebar from "./components/main/Sidebar"
import SidebarMobile from "./components/main/SidebarMobile";
import MainContent from "./components/main/MainContent";

import { useState } from "react";
import { CartShop } from "./components/main/CartShop";


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
    <div className="bg-primary w-full min-h-screen">
      {/* sidebar */}
      <Sidebar showMenu={showMenu} showOrder={showOrder} toggleOrder={toggleOrder} />
      {/* sidebar Mobile */}
      <SidebarMobile showMenu={showMenu} toggleOrder={toggleOrder} toggleMenu={toggleMenu} />

      <main className="lg:pl-[70px] grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-8 pb-10 lg:pb-0">
        {/* main content */}
        <MainContent showOrder={showOrder} />

        {/* cart shop */}
        <section className={`bg-secondary md:col-span-2 fixed lg:right-0 lg:w-[350px] top-0 w-full h-full transition-all border-l border-l-gray-800
          ${showOrder ? "right-0" : "-right-full"} ${showOrder ? "lg:col-span-2" : "hidden"}`}>
          {/* cart */}
          <CartShop toggleOrder={toggleOrder} />
        </section>
      </main>
    </div>
  )
}

export default App
