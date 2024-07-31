import HeaderMain from "../shared/HeaderMain";
import data from '../../database/card.json'

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
                    <h2 className="text-xl text-gray-300 mb-10 md:mb-8">Set Menu</h2>
                </div>

                {/* content */}
                <div className="p-5 xl:pb-0 grid grid-cols-2 gap-12 sm:gap-14 sm:grid-cols-3 xl:grid-cols-4">

                    {/* cards */}
                    {data.map(product => (
                        <div className="bg-secondary p-0 md:p-10 xl:p-5 rounded-xl flex flex-col gap-1 text-gray-300 mb-4" >
                            <img src={product.imgPrevie}
                                className="w-full xl: h-40 object-cover bg-center m-auto -mt-10 shadow-2xl" alt="set-1" />
                            <h3 className="text-gray-600 font-bold text-start mt-4">{product.marca}</h3>
                            <p className="text-lg text-gray-400">{product.name}</p>
                            <span className="text-3xl">{product.precie}</span>
                            <button className="text-white mt-5 py-3 px-4 bg-accent rounded-xl w-full">add to cart</button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default MainContent