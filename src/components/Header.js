import { LOGO_URL } from "../util/constants";

export const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img src= {LOGO_URL} alt="img" className="logo" />
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>ContactUs</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;