import { useSelector, useDispatch } from "react-redux";
import { FaArrowUp } from 'react-icons/fa';
import { useEffect } from "react";
import { showScrollTop, hideScrollTop } from '../slices/scrollSlice';
const ScrollToTop = () => {
    const dispatch = useDispatch();
    const isScrollToTop = useSelector((state) => state.scroll.isScrollTop);
    const toggleScroll = () => {
        if (window.scrollY > 100) {
            dispatch(showScrollTop());
        } else {
            dispatch(hideScrollTop());
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleScroll);
        return () => window.removeEventListener('scroll', toggleScroll);
    }, [dispatch]);
    return (
        isScrollToTop && (
            <button 
                onClick={scrollToTop} 
                className="fixed bottom-4 right-4 bg-orange-300 text-white p-6 rounded-full shadow-lg hover:bg-orange-500 btn-scroll transition-all"
            >
                <FaArrowUp />
            </button>
        )
    );
};
export default ScrollToTop;