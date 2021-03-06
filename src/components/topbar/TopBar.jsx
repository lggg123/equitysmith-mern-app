import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <span class="logo">Equity</span>smith
            </div> 
            <div className="topRight">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/become-an-advisor">Become An Advisor</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </div>
    )
}