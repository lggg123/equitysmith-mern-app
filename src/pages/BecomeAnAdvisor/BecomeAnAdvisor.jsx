import "./becomeAnAdvisor.css"
import advisorImg from "../../img/advisor.png"

export default function BecomeAnAdvisor() {
    const title_sect1 = "Are you a high performing"
    const title_sect2 = "Insurace Broker, CPA\n"
    const last_title = "Tell us about yourself and we'll respond\nwith further details."
    const text1 = "Equitysmith provides consumers and business owners with hassle-free telephone\nand screen sharing consultations with insurance and financial professionals near\nthem. In exchange for engaging with prospects via 15-minute, pre-scheduled\nappointments, we'll match you with an unlimited number of prospects interested in\nthe services you offer to help you add clients to your business practice."
    return (
        <>
            <div className="advisorContent">    
                <h1>{title_sect1} <span className="title">{title_sect2}</span>or <span className="title">Financial Planner</span> in California?</h1>
                <h2>Think about how a steady stream of fresh, free leads would change your business.</h2>
                <p className="advisor_p">{text1}</p>
                <h2>Sound Interesting?</h2>
                <h2 className="title">{last_title}</h2>
            </div>
            <img src={advisorImg} className="advisorImg"></img>
        </>
    )
}