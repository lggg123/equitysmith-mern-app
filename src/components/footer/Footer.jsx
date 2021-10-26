import "./footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <>
            <div className="container">
                <footer>
                    <div className="ft-item">
                        <div className="logoStyle">
                            <span className="logo">Equity</span>smith
                            <div className="under-text">
                                Invest in <span className="blue">yourself</span>
                            </div>
                            <div className="social-media-img">
                                <img></img>
                                <img></img>
                                <img></img>
                            </div>
                        </div>
                    </div>
                    <div className="ft-item">
                        <div className="col-title">
                            Home
                        </div>
                        <ul>
                            <li><Link to="/about-us">About Equitysmith</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="ft-item">
                        <div className="col-title">
                            Join Our Platform
                        </div>
                        <ul>
                            <li><Link to="/become-an-advisor"></Link></li>
                        </ul>
                    </div>
                    <div className="ft-item">
                        <div className="col-tile">
                            Subscribe to our newsletter
                        </div>
                        <form>
                            <label>Email</label>
                            <input type="email" name="email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    &copy;Copyright 2021 Equitysmith Corp. All rights reserved
                </footer>
            </div>
        </>
    )
}