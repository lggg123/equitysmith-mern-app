import "./privacyPolicy.css"

export default function PrivacyPolicy() {
    return (
        <>
            <h1>Contact <span class="blue">Us</span></h1>
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
                    <input type="textarea" name="message" />
                </label>
            </form>
        </>
    )
}