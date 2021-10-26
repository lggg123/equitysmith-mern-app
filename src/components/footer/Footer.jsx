import "./footer.css"
import { Link } from "react-router-dom"
import facebook from "../../img/facebook_icon_black.svg"
import instagram from "../../img/instagram_icon.svg"
import linkedin from "../../img/linkedin_icon.svg"

export default function Footer() {
    return(
        <div className="container">
            <div className="footer-container">
                <footer>
                    <section className="ft-main">
                        <div className="ft-item">
                            <div className="logoStyle">
                                <span className="blue">Equity</span>smith
                            </div>
                            <div className="under-text">
                                Invest in <span className="blue">yourself</span>
                            </div>
                            <ul className="social-media">
                                <li className="social-icon"><a href="#"><img src={facebook}/></a></li>
                                <li className="social-icon"><a href="#"><img src={instagram}/></a></li>
                                <li className="social-icon"><a href="#"><img src={linkedin}/></a></li>
                            </ul>
                        </div>
                        <div className="ft-item">
                            <div className="col-title">
                                Home
                            </div>
                            <ul className="footer-links">
                                <li><Link to="/about-us" className="footer-link">About Equitysmith</Link></li>
                                <li><Link to="/contact-us" className="footer-link">Contact Us</Link></li>
                                <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="ft-item">
                            <div className="col-title">
                                Join Our Platform
                            </div>
                            <ul className="footer-links">
                                <li><Link to="/become-an-advisor" className="footer-link">Become An Advisor</Link></li>
                            </ul>
                        </div>
                        <div className="ft-item">
                            <div className="col-title">
                                Subscribe to our newsletter
                            </div>
                            <form>
                                <label class="email-title">Email</label>
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </section>
                    <div className="copyright">&copy;Copyright 2021 Equitysmith Corp. All rights reserved</div>
                </footer>
            </div>
        </div>
    )
}