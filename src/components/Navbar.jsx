import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../slices/menuSlice'; 
import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.jpg';
import iconMenu from '../assets/iconMenu.svg';
import iconClose from '../assets/iconClose.svg';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './NotFound';
import Men from './Men';
import Women from './Women';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Profile from './Profile';
import Collections from './Collections';
import Home from './Home';
import ProductDetail from './ProductDetail';
const Navbar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.menu.isOpen);   
    const cartCount = useSelector((state) => state.cart.count);
    return (
        <div className="relative">           
            <div className='w-full flex justify-between items-center mt-10 px-4 z-10000'>
                <button onClick={() => dispatch(toggleMenu())} className="md:hidden">
                    <img src={isOpen ? iconClose : iconMenu} alt="Menu Icon" className="w-4 h-4" />
                </button>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='hidden list-none sm:flex gap-10 md:mr-30'>
                    <Link to='/collections'>
                        <li className='bb'>Collections</li>
                    </Link>
                    <Link to='/men'>
                        <li className='bb'>Men</li>
                    </Link>
                    <Link to='/women'>
                        <li className='bb xs:bb-hidden'>Women</li>
                    </Link>
                    <Link to='/about'>
                        <li className='bb'>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='bb'>Contact</li>
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <Link to='/cart'>
                        <div className="relative">
                            <svg width="22" height="20" className="transitionMe opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero"></path>
                            </svg>
                            <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-orange-500 text-white rounded-full text-xs px-1">{cartCount}</span>  
                        </div>
                    </Link>
                    <Link to='/profile'>
                        <img src={avatar} alt="Avatar" className='w-10 h-10 rounded-full' />
                    </Link>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-10`}>
                <div className="flex flex-col p-4">
                    <button onClick={() => dispatch(toggleMenu())} className="self-start mt-8 mb-4">
                        <img src={iconClose} alt="Close Icon" className="w-4 h-4" />
                    </button>
                    <hr className='mt-10 w-full'/>
                    <div className='navLink'>
                        <Link to='/' onClick={() => dispatch(toggleMenu())}>
                            <li className='list-none mb-14 translate-y-6'>Home</li>
                        </Link>
                    </div>
                    <hr />
                    <div className='navLink'>
                        <Link to='/collections' onClick={() => dispatch(toggleMenu())}>
                            <li className='list-none mb-14 translate-y-6'>Collections</li>
                        </Link>
                    </div>
                    <hr />
                    <div className='navLink'>
                        <Link to='/men' onClick={() => dispatch(toggleMenu())}>
                            <li className='list-none mb-14 translate-y-6'>Men</li>
                        </Link>
                    </div>
                    <hr />
                    <div className='navLink'>
                        <Link to='/women' onClick={() => dispatch(toggleMenu())}>
                            <li className='list-none mb-14 translate-y-6'>Women</li>
                        </Link>
                    </div>
                    <hr />
                    <div className='navLink'>
                        <Link to='/about' onClick={() => dispatch(toggleMenu())}>
                            <li className='list-none mb-14 translate-y-6'>About</li>
                        </Link>
                    </div>
                    <hr />
                    <div className='navLink'>
                        <Link to='/contact' onClick={() => dispatch(toggleMenu())}>
                            <li className='list-none mb-14 translate-y-6'>Contact</li>
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
            <hr className='bb mt-8' />   
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collections' element={<Collections />} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>  
        </div>
    );
};
export default Navbar;