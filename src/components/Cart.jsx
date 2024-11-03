import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../slices/cartSlice';
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import tumbleweed from '../assets/tumbleweed.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify"; 
import { toggleHeart , setInitialState } from '../slices/heartSlice';
import { CiStar } from "react-icons/ci";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = Number(useSelector((state) => state.cart.totalPrice)) || 0;
    const discount = Number(useSelector((state) => state.cart.discount)) || 0;  
    const isFavoritedMap = useSelector((state) => state.heart);  
    const finalTotal = totalPrice - discount;      
    useEffect(() => {
        dispatch(setInitialState());
    }, [cartItems, dispatch]);
    const handleDeleteProduct = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this item from the cart?");
        if (confirmDelete) {
            dispatch(removeFromCart(id));
            toast.info("Removed From Cart!");      
        }
    };
    return (
        <div>
            <ToastContainer position="bottom-right" /> 
            <div className="flex justify-center items-center mt-6">
                <h2 className="title-style uppercase">Your Cart</h2>
            </div>
            {cartItems.length === 0 ? (
                <div className="cart flex mt-10 justify-center">
                    <div className="animation-container mt-20 text-center">
                        <p className="uppercase">Nothing here..</p>
                        <img src={tumbleweed} alt="tumbleweed" className="w-28 mt-6 bounce" />
                    </div>
                    <div className='ml-20'>
                        <div className="w-72 h-20 border-2 border-gray-400 rounded-lg p-4">
                            <p className="font-bold">Price: <span className="text-orange-500">${totalPrice.toFixed(2)}</span></p>
                            <p className="font-bold">Discount: <span className="text-gray-500">${discount.toFixed(2)}</span></p>
                        </div>
                        <div className="mt-6 w-72 h-14 border-2 border-gray-400 rounded-lg p-2">
                            <p className="font-bold mt-2">Total: <span className="text-orange-500">${finalTotal.toFixed(2)}</span></p>
                        </div>
                    </div>                
                </div>      
            ) : (
                <div className="cart flex mt-10 justify-center gap-40 border-2 border-transparent">
                    <div className="w-[40%]">
                        {cartItems.map((item) => {
                            const price = Number(item.price);
                            const originalPrice = Number(item.originalPrice);
                            const isFavorited = isFavoritedMap[item.id];  
                            return (
                                <div key={item.id}>
                                    <div className={`flex items-center gap-4 border-b py-4 ${isFavorited ? 'border-orange-500' : 'border-transparent'}`}>
                                        <img src={item.img} alt={item.name} className="w-20 h-20" />
                                        <div className="flex-1">
                                            <p className="text-orange-500 mb-2">{item.company}</p>
                                            <p className="font-bold mb-2">{item.name}</p>
                                            <div className='flex mb-2'>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <CiStar key={index} />
                                                ))}
                                            </div>
                                            <p><s className='opacity-70'>{item.discount}</s> {item.price}</p>
                                        </div>    
                                        <div className='flex'>
                                            <button onClick={() => handleDeleteProduct(item.id)}>🗑️</button>
                                            <CiHeart 
                                                onClick={() => dispatch(toggleHeart(item.id))}
                                                className={`cursor-pointer w-5 ${isFavorited ? "text-red-500" : "text-gray-500"}`}
                                            />
                                        </div>    
                                    </div>
                                    <div className="flex gap-4 bg-orange-500 items-center text-white -translate-y-10 count w-fit">
                                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                    </div>                
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <div className="w-72 h-20 border-2 border-gray-400 rounded-lg p-4">
                            <p className="font-bold">Price: <span className="text-orange-500">${totalPrice.toFixed(2)}</span></p>
                            <p className="font-bold">Discount: <span className="text-gray-500">${discount.toFixed(2)}</span></p>
                        </div>
                        <div className="mt-6 w-72 h-14 border-2 border-gray-400 rounded-lg p-2">
                            <p className="font-bold mt-2">Total: <span className="text-orange-500">${finalTotal.toFixed(2)}</span></p>
                        </div>
                    </div>
                </div>
            )}
            <div className={`mt-14 btn-check -translate-y-10 font-bold flex ml-[50%] gap-4 ${cartItems.length === 0 ? "cursor-not-allowed bg-red-200" : "cursor-pointer bg-orange-500"} rounded-lg w-fit text-white px-20 py-4`}>
                <CiShoppingCart className={cartItems.length === 0 ? "cursor-not-allowed" : "cursor-pointer"} />
                <button className={cartItems.length === 0 ? "cursor-not-allowed" : "cursor-pointer"}>Check Out</button>
            </div>
            <Link to='/collections'>
                <div className="view flex ml-[55%] cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-4 transition-all">
                    <p>View Products</p>
                    <FaArrowRight />
                </div>
            </Link>
            <Footer />
        </div>
    );
};
export default Cart;