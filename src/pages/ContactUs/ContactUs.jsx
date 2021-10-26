import "./contactUs.css"

export default function ContactUs() {
    return (
        <>
            <div className="contactTitle"><h1>Contact <span class="blue">Us</span></h1></div>
            <div className="contactForm">
                <form>
                    <label>
                        Name 
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email 
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Phone number: 
                        <input type="text" name="phone number:" />
                    </label>
                    <label>
                        Message 
                        <textarea placeholder="Message"></textarea>
                    </label>
                </form>
            </div>
        </>
    )
}