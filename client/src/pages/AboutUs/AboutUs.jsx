import "./aboutUs.css"
import aboutUs1 from "../../img/about-us1.png"
import aboutUs2 from "../../img/about-us2.jpeg"

export default function AboutUs() {
    const text1 = "Equitysmith's mission is to facilitate and pressure-free information-gathering sessions\nbetween consumers and business owners and qualified professionals in the area they live.\nEach 15-minute call is completely without cost or obligation."
    const text2 = "The financial professionals (Advisors) in the Equitysmith network are not employees or contractors\nof the company but are independent volunteers who have been vetted based on their skills,\nexpertise, and reputation. Equitysmith is not compensated for connecting Advisors with consumers\nnor do we benefit financially from any services purchased or transactions which may result from\nthese consultations."
    const text3 = "Ensuring privacy of your data is important to us. For this reason, we have the most stringent\nPrivacy Policy possible. Any information you provide to Equitysmith when you schedule your\nAdvisor call (name, email, and telephone) will only be used by the Advisor and Equitysmith. We will\nnever sell, rent, or otherwise make available your information to a third party or anyone else.\n\nRead our full Privacy Statement"
    const text4 = "We're passionate about our mission because we know how hard you work for your money.\n\nWhether you're investing for college, planning for retirement, or saving for your first car, we believe\neveryone deserves access to high-quality, independent advice."
    const small_title = "Equitysmith provides you with free 15-minute consultations \nwith"
    const link1 = "here"
    const list_t1 = " There's no obligation and we will never sell your personal\n information. You are free to hang up, opt out, or get a second opinion at any time."
    const list_t2 = " Financial professionals may not use your 15-minute phone consultation for\nsales purposes. Every minute is dedicated to answering questions."
    const list_t3 = " The areas of interest you indicate when you\nschedule your call is used to select an Advisor with expertise best suited to addressing your questions."
    return (
        <>   
            <div className="about"> 
                <img className="aboutImage1" src={aboutUs1}></img>
                <div className="aboutContent">
                    <div className="aboutTitle"><h1>Getting expert advice<span class="blue"> just got a lot easier!</span></h1></div>
                    <div className="aboutSmallTitle"><h2>{small_title} <span className="title">insurance and financial professionals</span> at your convenience</h2></div>
                    <p className="aboutText">{text1}</p>
                    <div className="aboutTitle"><h1>What Makes Equitysmith<span className="title"> Different?</span></h1></div>
                    <p className="aboutText">{text2}</p>
                    <div className="aboutTitle"><h1>Your Privacy is <span className="title">Guaranteed</span></h1></div>
                    <p className="aboutText">{text3} <a href="/privacy-policy">{link1}</a>.</p>
                    <div className="aboutTitle"><h1>It's Time for a Better Insurance and Financial Service<span className="title"> Experience</span></h1></div>
                    <ul className="no-bullet">
                        <li><span className="title">You are in complete control:</span>{list_t1}</li>
                        <li><span className="title">No selling permitted:</span>{list_t2}</li>
                        <li><span className="title">We match you with a "Best Fit" professional:</span>{list_t3}</li>
                    </ul>
                    <p className="aboutText">{text4}</p>
                </div>
            </div>
            <img className="aboutImage2" src={aboutUs2}></img>
        </> 
    )
}