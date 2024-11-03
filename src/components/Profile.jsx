import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"; 
import Footer from "./Footer";
const Profile = () => {
    const handleForgetPassword = () => {
        toast.info("Take a breath! and remember your Password.");      
    };
    return (
        <div>
        <section className="profile flex justify-center items-center">
            <ToastContainer position="bottom-right" /> 
            <div className="profile-container flex rounded-lg bg-white gap-10">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        alt="Profile Sneaker"
                        className="profileSneaker"              
                    />
                </div>
                <div className="profile-content px-14 py-14">
                    <h1 className="font-bold text-3xl">Welcome Back!</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="grid mt-10">
                        <input
                            type="text" 
                            placeholder="Username"
                            className="profile-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="profile-input"
                        />
                    </form>
                    <Link to={null} onClick={handleForgetPassword}>
                        <p className="opacity-60 -translate-x-4">
                            Forget Password?
                        </p>                    
                    </Link>
                    <div className="container-button flex mt-6 gap-6">
                        <button className="profile-btn bg-orange-500 px-14 py-4">Login</button>  
                        <button className="profile-btn bg-black px-14 py-4">Sign Up</button>                                             
                    </div>
                </div>
            </div>
        </section>        
        <Footer />
        </div>
    );
}; 
export default Profile;