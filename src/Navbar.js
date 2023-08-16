import { Link } from 'react-router-dom';
import logo from './images/logo.jpg'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className='logoContainer'>
                <img src={ logo } alt="" />
            </div>
            <div className="links">
                <Link to= '/'>Home</Link>
                <Link to= '/about-us'>About Us</Link>
                <Link to= '/services'>Services</Link>
                <Link to= '/contact-us'>Contact Us</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;