import "./aboutUs.css"

export default function AboutUs() {
    const text1 = "Equitysmith's mission is to facilitate and pressure-free information-gathering sessions between consumers and business owners and qualified professionals in the area they live. Each 15-minute call is completely without cost or obligation."
    const text2 = "Ensuring privacy of your data is important to us. For this reason, we have the most stringent Privacy Policy possible. Any information you provide to Equitysmith when you schedule your Advisor call (name, email, and telephone) will only be used by the Advisor and Equitysmith. We will never sell, rent, or otherwise make available your information to a third party or anyone else. Read our full Privacy Statement"
    const link1 = "here"
    const text3 = "We're passionate about our mission because we know how hard you work for your money. Whether you're investing for college, planning for retirement, or saving for your first car, we believe everyone deserves access to high-quality, independent advice."
    return (
        <> 
            <img></img>
            <h1>Getting expert advice just got a lot easier!</h1>
            <h2>Equitysmith provides you with free 15-minute consultations with <span className="title">insurance and financial professionals</span> at your convenience</h2>
            <p>{text1}</p>
            <img></img>
            <h1>What Makes Equitysmith<span className="title"> Different?</span></h1>
            <p>The financial professionals (Advisors) in the Equitysmith network are not employees or contractors of the company but are independent volunteers who have been vetted based on their skills, expertise, and reputation. Equitysmith is not compensated for connecting Advisors with consumers nor do we benefit financially from any services purchased or transactions which may result from these consultations.</p>
            <h1>Your Privacy is <span className="title">Guaranteed</span></h1>
            <p>{text2} <a href="/privacy-policy">{link1}</a>.</p>
            <h1>It's Time for a Better Insurance and Financial Service Experience</h1>
            <ul>
                <li><span className="title">You are in complete control:</span> There's no obligation and we will never sell your personal information. You are free to hang up, opt out, or get a second opinion at any time.</li>
                <li><span className="title">No selling permitted:</span> Financial professionals may not use your 15-minute phone consultation for sales purposes. Every minute is dedicated to answering questions.</li>
                <li><span className="title">We match you with a "Best Fit" professional:</span> The areas of interest you indicate when you schedule your call is used to select an Advisor with expertise best suited to addressing your questions.</li>
            </ul>
            <p>{text3}</p>
            <img></img>
        </>
    )
}