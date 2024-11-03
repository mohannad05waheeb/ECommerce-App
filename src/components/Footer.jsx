import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <Link to='/'>
         <div className='text-white font-bold text-3xl'>Sneakers</div>
        </Link>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3 className="footer-title">About</h3>        
          <ul className="footer-list">
            <Link to='/about'>
            <li className="linkHover">About us</li>
            </Link>
            <Link to='/about'>
            <li className="linkHover">Features</li>
            </Link>
            <Link to='/about'>
            <li className="linkHover">News & Blog</li>
            </Link>
          </ul>           
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Connect</h3>
          <ul className="footer-list">
            <Link to='https://www.linkedin.com/in/mohannad-waheeb-660501319/' target="_blank">
            <li className="linkHover">LinkedIn</li>
            </Link>
            <Link to='https://facebook.com/mohannadismail.waheeb' target="_blank">
            <li className="linkHover">Facebook</li>
            </Link>
            <Link to='https://github.com/mohannad05waheeb' target="_blank">
            <li className="linkHover">Github</li>
            </Link>         
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-list">
            <Link to='/contact'>
            <li className="linkHover">FAQs</li>
            </Link>
            <Link to='/contact'>
            <li className="linkHover">Support Center</li>
            </Link>
            <Link to='/contact'>
            <li className="linkHover">Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="footer-credits">Made with ❤️ and ☕ by {' '} 
         <Link to='https://www.linkedin.com/in/mohannad-waheeb-660501319/' className="name" target="_blank">
          Mohannad
        </Link>
      </p>
    </footer>
  );
};
export default Footer;