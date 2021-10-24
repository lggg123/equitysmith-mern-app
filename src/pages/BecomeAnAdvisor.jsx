import "./becomeAnAdvisor.css"

export default function BecomeAnAdvisor() {
    const text1 = "EquitySmith provides consumers and business owners with cost-free telephone and screen sharing consultations with insurance and financial professionals near them. In exchange for engaging with prospects via 15-minute, pre-scheduled phone calls interested in the services you provide, we'll match you with an unlimited number of leads to help you add clients to your business practice."
    return (
        <>
            <h1>Are you a high performing <span className="title">Insurance Broker, CPA</span> or <span className="title">Financial Planner</span> in California?</h1>
            <h2>Think about how a steady stream of fresh, free leads would change your business.</h2>
            <h2>The Equitysmith Vision</h2>
            <p>{text1}</p>
            <h2>Sounds Interesting?</h2>
            <h2 className="title">Tell us about yourself and we'll respond with further details.</h2>
            <img></img>
        </>
    )
}