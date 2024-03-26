import { useEffect, useState} from "react";
import { LOGO_URL } from "../util/constants";
import { Link } from "react-router-dom";

export const Header = () => { 
    const [loginBtn,setLoginBtn] = useState("login");
    useEffect(()=>{
          console.log("Anuradha")
    },[loginBtn])

return (
    <div className="header">
        <div className="logo-container">
            <img src= {LOGO_URL} alt="img" className="logo" />
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    (loginBtn == "login")?
                    setLoginBtn("logout"):
                    setLoginBtn("login");
                }}>
                    {loginBtn}
                </button>
            </ul>
        </div>
    </div>
);
}

export default Header;