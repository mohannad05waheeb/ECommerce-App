import { motion } from "framer-motion";
import homeSneaker from '../assets/home-sneaker.webp';
import { Link } from "react-router-dom";
import Product from "./Product";   
import Footer from './Footer'; 
export const imagesArray = [
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",   
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
];
export const imagesArray2 = [
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",   
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
];
export const imagesArray3 = [
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",   
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
];
const Home = () => {
    return (    
        <div>
            <div className="home flex items-center justify-start h-screen bg-white px-4 relative overflow-hidden -z-10 flex-col md:flex-row mt-20">
                <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
                    <h1 className="title text-4xl font-Poppins font-bold leading-tight">
                        Explore <span className="text-orange-500">Sneakers</span>.
                        <br /> Your Ultimate Footwear <br /> Destination!
                    </h1>
                    <p className="desc text-gray-600 mt-4">
                        Find the perfect kicks that blend fashion and function, ensuring every step is <br /> a statement. Step into Sneaker Paradise!
                    </p>
                    <div>
                        <Link to="/collections" className="w-fit block">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}   
                                whileTap={{ scale: 0.5 }}                       
                                className="hover:drop-shadow-2xl cursor-pointer mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-lg w-52 h-16 font-Poppins"
                            >
                                Shop Now
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <motion.div 
                    className="home-circle absolute right-4 top-1/10 w-80 h-80 rounded-full bg-orange-500 mb-20 home-circle order-3 md:order-2"
                    animate={{
                        rotate: [0, 20, -20, 0],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 8,
                        loop: Infinity,
                        ease: "easeInOut",
                    }}     
                />
                <img 
                    src={homeSneaker} 
                    alt="Home-Sneaker" 
                    loading="lazy" 
                    className="absolute right-10 top-1/5 w-96 z-10 -rotate-[25deg] -translate-y-28 order-1 md:order-3 home-sneakers"  
                /> 
            </div> 
            <div className="text-center mt-8">
                <h2 className="text-4xl font-bold uppercase tracking-wide text-gray-800 relative inline-block title-style">
                    Popular Sneakers
                </h2> 
            </div>    
            <div className="products-container p-4 mx-auto">
                <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product1"
                company="Nike" 
                name="valour blue" 
                price="$72"
                images={imagesArray} 
                />
                <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product2"
                company="Adidas" 
                name="jordan mars" 
                price="$100" 
                discount="$120" 
                images={imagesArray2} 
                />
                <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product3"
                company="Nike" 
                name="racer blue" 
                price="$120" 
                images={imagesArray3} 
                />           
            </div>
            <div className="flex justify-center mt-14">
                <Link to="/collections">
                    <motion.button 
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.2 }}
                        className="shadow bg-orange-500 text-white px-14 py-4 rounded-lg font-bold"
                    >
                        See All Collection
                    </motion.button>
                </Link>
            </div>
            <div className="mt-24">
                <Footer/>
            </div>
        </div>         
    );
};
export default Home;