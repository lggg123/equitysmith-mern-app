import "./financial.css"
import aboutUs1 from "../../img/about-us1.png"
import financial_tom from "../../img/financial_tom.png"

export default function Financial() {
    const text1 = "The 15-minute consultation call is entirely free - no strings attached, honest!"
    const text2 = "The CFP will answer as many of your questions as possible in the time allotted"
    const text3 = "Initial calls are for informational purposes only and the CFP will not attempt to sell you anything - really!"
    const text4 = "At your discretion, you may choose to further explore the services of the professional you speak with the choice is entirely yours!"
    const text5 = "Equitysmith connects a network of insurance and financial services professionals to our customers. \nThe information conveyed during your call does not constitute paid professional advice and Equitysmith \nis indemnified from liability of any kind. The use of our service constitutes your acceptance of these terms."

    return (
        <>
            <div className="container">
                <div className="finance-header">
                    <div className="finance-content">
                        <h1 className="finance-title">Getting expert {"\n"}<span class="blue">financial advice{"\n"}</span>just got a lot {"\n"}easier.</h1>
                    </div>
                    <div>
                        <h2 className="finance-mini-title">Speak with a <text style={{fontWeight: 'bold'}}>Certified Financial Planner (CFP) </text>today</h2>
                    </div>
                    <div>
                        <h2 className="finance-mini-title2">How your free 15-minute call works:</h2>
                    </div>
                    <div className="call-features">
                        <p>{text1}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                        <p>{text4}</p>
                    </div>
                    <div className="disclaimer">
                        <p id="grey">{text5}</p>
                    </div>
                    <h1 className="scheduleText">How can we help you <span class="blue">today?</span></h1>
                    <h2 className="scheduleText2">Our experienced <text style={{fontWeight: 'bold'}}>Certified Financial Planner (CFP) </text> are ready to advise you on a variety of financial management topics:</h2>
                </div>

                <div className="sideBar">
                    <img src={aboutUs1} id="aboutUs" alt=""></img>

                    <button className="scheduleButton">Schedule your free{"\n"}15-minute call now</button>

                    <img src={financial_tom} id="financial_tom" alt=""></img>
                </div>
            </div>


      
        </>
    )
    
}