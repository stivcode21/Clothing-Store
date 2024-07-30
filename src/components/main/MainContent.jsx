import HeaderMain from "../shared/HeaderMain";

const MainContent = (props) => {

    const { showOrder } = props;

    return (
        <>
            <div className={` p-5  ${showOrder ? "xl:col-span-6 lg:col-span-5" : "lg:col-span-8"}`}>
                {/* Header Main */}
                <header>
                    <HeaderMain />
                </header>

                {/* title content */}
                <div>
                    <h2 className="text-xl text-gray-300 md:mb-10 lg:mb-20">Set Menu</h2>
                </div>

                {/* content */}
                <div className="p-5 xl:pb-0 sm:pb-20 grid grid-cols-1 gap-14 sm:grid-cols-2 xl:grid-cols-3">
                    {/* card */}
                    <div className="bg-[#1f1d2b] p-8 xl:p-5 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 mb-4" >
                        <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                            className="w-40 h-40 object-cover rounded-full -mt-20 shadow-2xl" alt="set-1" />
                        <p className="text-2xl">nike black white Grey luxury brand Hoodie</p>
                        <span className="text-gray-400">$79.99</span>
                        <p className="text-gray-600">Looking for the perfect luxury brand outfit to wear this winter? </p>
                    </div>

                    {/* card */}
                    <div className="bg-[#1f1d2b] p-8 xl:p-5 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 mb-4" >
                        <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                            className="w-40 h-40 object-cover rounded-full -mt-20 shadow-2xl" alt="set-1" />
                        <p className="text-2xl">nike black white Grey luxury brand Hoodie</p>
                        <span className="text-gray-400">$79.99</span>
                        <p className="text-gray-600">Looking for the perfect luxury brand outfit to wear this winter? </p>
                    </div>

                    {/* card */}
                    <div className="bg-[#1f1d2b] p-8 xl:p-5 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 mb-4" >
                        <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                            className="w-40 h-40 object-cover rounded-full -mt-20 shadow-2xl" alt="set-1" />
                        <p className="text-2xl">nike black white Grey luxury brand Hoodie</p>
                        <span className="text-gray-400">$79.99</span>
                        <p className="text-gray-600">Looking for the perfect luxury brand outfit to wear this winter? </p>
                    </div>

                    {/* card */}
                    <div className="bg-[#1f1d2b] p-8 xl:p-5 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 mb-4" >
                        <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                            className="w-40 h-40 object-cover rounded-full -mt-20 shadow-2xl" alt="set-1" />
                        <p className="text-2xl">nike black white Grey luxury brand Hoodie</p>
                        <span className="text-gray-400">$79.99</span>
                        <p className="text-gray-600">Looking for the perfect luxury brand outfit to wear this winter? </p>
                    </div>

                    {/* card */}
                    <div className="bg-[#1f1d2b] p-8 xl:p-5 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 mb-4" >
                        <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                            className="w-40 h-40 object-cover rounded-full -mt-20 shadow-2xl" alt="set-1" />
                        <p className="text-2xl">nike black white Grey luxury brand Hoodie</p>
                        <span className="text-gray-400">$79.99</span>
                        <p className="text-gray-600">Looking for the perfect luxury brand outfit to wear this winter? </p>
                    </div>

                    {/* card */}
                    <div className="bg-[#1f1d2b] p-8 xl:p-5 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 mb-4" >
                        <img src="https://i.pinimg.com/474x/f5/b1/21/f5b12124ec01dc731c73fac49840a64d.jpg"
                            className="w-40 h-40 object-cover rounded-full -mt-20 shadow-2xl" alt="set-1" />
                        <p className="text-2xl">nike black white Grey luxury brand Hoodie</p>
                        <span className="text-gray-400">$79.99</span>
                        <p className="text-gray-600">Looking for the perfect luxury brand outfit to wear this winter? </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent