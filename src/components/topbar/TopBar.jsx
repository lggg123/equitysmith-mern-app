import "./topbar.css"
import AboutUs from "../../pages/AboutUs"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <h2><span class="logo">Equity</span>smith</h2>
            </div> 
            <div className="topRight">
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/blog">Blog</a>
                <a href="/become-an-advisor">Become An Advisor</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/contact-us">Contact</a>
            </div>
        </div>
    )
}