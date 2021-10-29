import "./home.css"
import test_1 from "../../img/test_1.jpeg"
import test_2 from "../../img/test_2.jpeg"
import test_3 from "../../img/test_3.jpeg"


export default function Home() {
    const title_p1 = "Getting expert"
    const title_p2 = "insurance"
    const title_p3 = "and \n"
    const title_p4 = "financial advice"
    const title_p5 = "just got a lot easier! \n"
    const s_title_p1 = "\nHow our program works: \n"
    const s_title_p2 = "We provide free 15-minute calls\n"
    const s_title_p3 = "with"
    const s_title_p4 = "Financial Service Professionals"
    const s_title_p5 = "near you."
    const testimonial_1 = '"I got answers to my tax and debt management questions quickly and with suggestions on how to move forward."'
    const testimonial_2 = '"I never fully understood my 401(k) until I spoke with a Certified Financial Planner."'
    const testimonial_3 = '"Student debt was my real challenge \n which was forcing me to put off creating a budget and a savings plan. Not anymore!"'
    const name_loc1 = " Hector \n Camarillo,Calif"
    const name_loc2 = " Susan \n Agoura Hills,Calif"
    const name_loc3 = " Brian \n Ventura,Calif"
  
    return (
        <div className="text">
            <div className="content">
                <span className="comp_title">{title_p1} <span className="title">{title_p2} </span>{title_p3}<span className="title">{title_p4}</span> {title_p5}</span>
                <span className="mini-title">{s_title_p1}{s_title_p2}</span>
                <span className="mini-title2">{s_title_p3}<span className="title"> {s_title_p4}</span> {s_title_p5}</span>
                <h3>You're in complete control all the way:</h3>
                <ul className="check">
                    <li>There is no cost for the call and absolutely no obligation</li>
                    <li>The Advisor you speak with will answer as many of your questions as possible, no selling - we promise</li>
                    <li>At your discretion, you may choose to further explore the service of the professional you speak with - the choice is entirely yours</li>
                </ul>
            </div>
            <div className="test-container">
                <div className="test">
                    <img className="test_img" src={test_3}></img>
                    <p className="blue">{testimonial_1}</p>
                    <p className="NameLoc">{name_loc1}</p>
                </div>
                <div className="test">
                    <img className="test_img" src={test_2}></img>
                    <p>{testimonial_2}</p>
                    <p className="NameLocM">{name_loc2}</p>
                </div>
                <div className="test">
                    <img className="test_img" src={test_1}></img>
                    <p className="blue">{testimonial_3}</p>
                    <p className="NameLoc">{name_loc3}</p>
                </div>
            </div>
        </div>
    )
}