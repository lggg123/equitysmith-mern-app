import "./contactUs.css"

export default function ContactUs() {
    return (
        <div className="contactContainer">
            <div className="contactColumn">
                <div className="contactTitle"><h1>Contact <span class="blue">Us</span></h1></div>
                <div className="contactForm">
                    <form>
                        <label>
                            Name 
                        </label>
                        <input type="text" name="name" />
                        <label>
                            Email
                        </label>
                        <input type="text" name="email" />
                        <label>
                            Phone number: 
                        </label>
                        <input type="text" name="phone number:" />
                        <label>
                            Message 
                        </label>
                        <textarea></textarea>
                        <input type="submit" className="send" value="Send" />
                    </form>
                </div>
            </div>
            <div className="contactColumn">
                <div className="contactBox">
                    <h2>Connect with us</h2>
                    <ul>
                        <li>Find us on Facebook</li>
                        <li>Connect with us on Linkedin</li>
                        <li>Follow us on Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}