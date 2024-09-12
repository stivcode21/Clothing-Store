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
                    <h2 className="text-xl text-text font-semibold mb-10 md:mb-8">Set Menu</h2>
                </div>

                {/* content */}
                <div className="pb-10 xl:pb-0 grid grid-cols-2 gap-6 sm:gap-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

                    {/* cards */}
                    {data.map(product => (
                        <div className="bg-secondary md:w-full m-auto shadow-xl px-5 md:px-5 py-2 xl:px-5 rounded-xl flex flex-col gap-1 text-gray-300 mb-4 box-border" >
                            <img src={product.imgPrevie}
                                className="w-full h-40 object-cover shadow-md rounded-t-xl rounded-b-xl bg-center" alt="set-1" />
                            <h3 className="text-text font-bold text-start mt-4">{product.marca}</h3>
                            <p className="text-md text-gray-800">{product.name}</p>
                            <span className="text-3xl text-text">{product.precie}</span>
                            <button className="text-white mt-5 py-3 px-4 bg-accent rounded-xl w-full hover:scale-110">add to cart</button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default MainContent