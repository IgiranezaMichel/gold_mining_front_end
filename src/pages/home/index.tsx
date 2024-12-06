import {motion} from 'framer-motion'
import { VisitorNavigation } from "./components/navigation";
import Footer from "./components/footer";
import { ProductCard } from "./components/productCard";
export const Index = () => {
    const offers = [
        {
            id: 1,
            title: "Rare Earth",
            description: "Pure and high-quality minerals you can order",
            price: 89.99,
            originalPrice: 120.0,
            image: '../products/boffer1.png',
        },
        {
            id: 2,
            title: "Gemstone",
            description: "Pure and high-quality minerals you can order",
            price: 199.99,
            originalPrice: 250.0,
            image: '../products/boffer.png',
        },
        {
            id: 3,
            title: "Lithium",
            description: "Pure and high-quality minerals you can order",
            price: 199.99,
            originalPrice: 250.0,
            image: '/products/boffer.png',
        },
    ]
    return  <div className="w-full h-screen relative">
    <img
        src={'../mine.jpg'}
        alt="Background"
        className="w-full h-full object-cover"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
    <div className="w-full h-full text-white text-center absolute top-0 left-0 z-10">
        <VisitorNavigation/>

        {/* Main Content Section */}
        <div className='flex justify-center items-center h-[86%]'>
            <div className='col-span-1 flex space-y-8 flex-col justify-center items-center'>

                {/* Text Section (Animated from Top) */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='flex flex-col'
                >
                    <h1 className="text-2xl font-bold capitalize lg:text-3xl font-arial-rounded">
                        KIGALI GOLDCHAIN MANAGER
                    </h1>
                    <p className="text-sm">Supply Chain Management System for Gold</p>
                </motion.div>

                {/* Line (Static) */}
                <hr className='border border-white w-full' />

                {/* Button Section (Animated from Bottom) */}
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-primary text-white py-2 px-6 text-lg rounded-lg hover:bg-[#c79243] transition duration-300"
                >
                    Explore More
                </motion.button>
            </div>
        </div>
    </div>
    <div className='bg-white min-h-screen w-full'>
        <div className='max-w-6xl mx-auto py-8'>
            <h1 className='text-center text-2xl font-semibold text-slate-800'>Our Products</h1>
            <ProductCard/>
        </div>
      <section className="py-8 bg-gray-100">
            <div className="container max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Best Offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer) => (
                        <div key={offer.id} className="bg-white p-4 rounded-lg  shadow-lg">
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                            <p className="text-gray-700 mb-2">{offer.description}</p>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-bold text-primary">${offer.price}</span>
                                <span className="text-sm text-gray-500 line-through">${offer.originalPrice}</span>
                            </div>
                            <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-opacity-90 transition">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    </div>
    <Footer/>
</div>
}