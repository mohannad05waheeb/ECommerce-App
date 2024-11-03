import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { toggleHeart } from '../slices/heartSlice';
import { CiStar, CiHeart } from "react-icons/ci";
import addToCartIcon from '../assets/add-to-cart.svg';
import removeFromCartIcon from '../assets/remove-from-cart.svg';
import eyeIcon from '../assets/eye.svg';
import { toast, ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';  
import 'react-toastify/dist/ReactToastify.css'; 
const Product = ({ srcImg, id, company, name, price, discount, images }) => {
    const dispatch = useDispatch();
    const isFavorited = useSelector((state) => state.heart[id]);
    const isInCart = useSelector((state) => state.cart.items.some(item => item.id === id));
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleToggleCart = () => {
        const productData = { id, srcImg, company, name, price, discount };
        if (isInCart) {
            dispatch(removeFromCart(id));
            toast.info("Removed From Cart!");
        } else {
            dispatch(addToCart(productData));
            toast.info("Added To Cart!");
        }
    };
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };
    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="product-container product w-full flex flex-col items-start ml-2">
            <ToastContainer position="bottom-right" />
            <div className='relative'>
                <div className={`border-2 ${isFavorited ? 'border-orange-500' : 'border-transparent'} rounded-md`}>
                    <div className="relative group" onClick={() => openLightbox(0)}>
                        <img
                            src={srcImg}
                            alt={name}
                            loading='lazy'
                            className="img object-cover h-80 w-full hover:scale-105 transition-all"
                        />
                        <img
                            src={eyeIcon}
                            alt="view"
                            className="absolute top-[20%] right-[15%] w-60 h-60 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <CiHeart
                        onClick={() => dispatch(toggleHeart(id))}
                        className={`w-6 h-6 absolute top-[10%] right-[5%] cursor-pointer hover:scale-125 transition-all ${isFavorited ? 'text-red-500' : 'text-black'}`}
                    />
                </div>
                <div className='flex justify-between items-center mt-2 w-full'>
                    <Link to={`/product/${id}`} className='text-orange-500 cursor-pointer'>{company}</Link>
                    <p><s className='opacity-70'>{discount}</s> {price}</p>
                </div>
                <div>
                    <Link to={`/product/${id}`} className='uppercase font-bold cursor-pointer'>
                    {name}
                    </Link>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CiStar key={index} />
                        ))}
                    </div>
                    <div className='flex items-center -mt-4' onClick={handleToggleCart}>
                        <div className='relative group'>
                            <button className='bg-orange-100 p-2 rounded-md transition-all shadow-none hover:shadow-lg hover:bg-orange-200 z-10'>
                                <img src={isInCart ? removeFromCartIcon : addToCartIcon} alt={isInCart ? "remove from cart" : "add to cart"} className='w-5 h-5' />
                            </button>
                            <span className='absolute top-[-35px] left-1/2 transform -translate-x-1/2 bg-orange-100 text-black font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                {isInCart ? "Remove From Cart" : "Add To Cart"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {isLightboxOpen && images && images.length > 0 && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white p-4 rounded-lg">
                        <button className="absolute top-2 right-2 text-gray-500 font-bold hover:text-orange-500 transition-all" onClick={closeLightbox}>✕</button>
                        <img src={images[currentImageIndex]} alt="Product" className="h-80 w-full object-cover" />
                        <div className="flex justify-between mt-4">
                            <button onClick={prevImage} className="p-2 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition-all">{"<"}</button>
                            <button onClick={nextImage} className="p-2 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition-all">{">"}</button>
                        </div>
                        <div className="mt-4 flex justify-center space-x-2">
                            {images.slice(0, 4).map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className={`w-16 h-16 object-cover cursor-pointer border-2 ${currentImageIndex === index ? 'border-orange-500' : 'border-transparent'}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Product;