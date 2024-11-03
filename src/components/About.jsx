import map from "../assets/treasure-map.svg";
import cup from "../assets/cup.svg";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from './Footer'; 
const About = () => {
  const handleScrollBottom = () => {
    window.scrollTo(0, window.innerHeight);
  };
  return (
    <div>
      <section className="about flex-col flex items-center justify-center">
        <h1 className="titleAbout flex-1 flex items-center justify-center text-sec flex-col text-6xl text-center font-bold uppercase">
          The Story Of{" "}
          <span className="text-black">
            Sneakers<span className="text-orange-500">.</span>
          </span>
        </h1>
        <button
          onClick={() => handleScrollBottom()}
          className="uppercase font-medium text-sec flex items-center gap-2 mb-10 hover:text-sec-400 transitionMe group"
        >
          Read{" "}
          <FaLongArrowAltDown
            className={
              "stroke-sec-300 group-hover:stroke-sec-400 transitionMe animate-bounce w-5"
            }
          />
        </button>
      </section> 
      <div className="about2 container max-auto flex gap-10 justify-between mt-24 ml-6">
      <div className="items-center">
        <h1 className="font-bold text-xl mb-6 mt-20">Our Journey</h1>
        <p className="mt-20 max-w-[400px] opacity-70">
          <span className="text-orange-500 font-bold opacity-100">Sneakers</span> was born out of a shared love for <span className="text-orange-500 font-bold opacity-100">Sneakers</span>
          and a desire to create a one-stop destination for all sneakerheads. The idea originated when a group 
          of friends realized that finding the perfect pair of <span className="text-orange-500 font-bold opacity-100">Sneakers</span> 
          Often involved scouring multiple stores and <br /> websites.   
        </p>
        <p className="max-w-[400px] opacity-70">
          We decided to change this and embarked on a journey to curate a premium selection of
           <span className="font-bold text-orange-500 opacity-100"> Sneakers</span>, making
          thim easily accessible to Sneaker enthusiasts Worldwide. 
        </p>
      </div> 
      <motion.div 
       drag
       dragSnapToOrigin
       dragConstraints={{
       top: 20,
       left: 20,
       right: 20,
       bottom: 20,
     }}
      className="ml-40">
        <img 
        src={map}
        alt="map" 
        className="animate-float"
        draggable="false"
        loading="lazy"
       />
      </motion.div>      
      </div>  
      <div className="p-6 -translate-x-[2%] max-w-[300%] bg about2 container max-auto flex gap-40 justify-between mt-24 ml-6">
      <motion.div 
       drag
       dragSnapToOrigin
       dragConstraints={{
       top: 20,
       left: 20,
       right: 20,
       bottom: 20,
     }}
      className="ml-40">
        <img 
        src={cup}
        alt="cup" 
        className="animate-float mt-[50%]"
        draggable="false"
        loading="lazy"
       />
      </motion.div>      
      <div className="items-center">
        <h1 className="font-bold text-xl mb-6">Our Mission</h1>
        <p className="w-[100%] opacity-70">
          <span className="text-orange-500 font-bold opacity-100">Sneakers</span> was born out of a shared love for <span className="text-orange-500 font-bold opacity-100">Sneakers</span>
          and a desire to create a one-stop destination for all sneakerheads. The idea originated when a group 
          of friends realized that finding the perfect pair of <span className="text-orange-500 font-bold opacity-100">Sneakers</span> 
          Often involved scouring multiple stores and <br /> websites.   
        </p>
        <p className="max-w-[400px] opacity-70">
          We decided to change this and embarked on a journey to curate a premium selection of
           <span className="font-bold text-orange-500 opacity-100"> Sneakers</span>, making
          thim easily accessible to Sneaker enthusiasts Worldwide. 
        </p>
      </div>  
      </div>  
      <div className="flex justify-center items-center mt-24">
        <p className="opacity-70 max-w-[500px]">
          At <span className="text-orane-500">Sneakers</span>, We are committed  
          to providing our customers with an unparalleled shopping experince.
          We carefully handpick each pair of <span className="text-orane-500">Sneakers</span>
          from renowend brands, ensuring that they meet the highest standars
          of carftsmanship, quailty, and design. Whether you are a sports enthustais
          a street-style aficiondo, or simply seeking comfortable everyday shoes,
          we have something special for everyone.   
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link to='/collections'>
        <button className="text-white bg-orange-500 px-12 py-4 font-bold rounded-lg hover:scale-110 shadow transition-all">Explore Sneakers</button>
        </Link>
      </div>
      <div className="mt-24">
        <Footer /> 
      </div>
      </div>    
  );
};
export default About; 