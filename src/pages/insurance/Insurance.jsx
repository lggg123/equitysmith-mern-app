import "./insurance.css"
import insurance_betty from "../../img/insurance_betty.png"
import insurance_jane from "../../img/insurance_jane.png"
import tax_issues from "../../img/tax_issues.png"
import cash_flow_analysis from "../../img/cash_flow_analysis.png"
import stocks_investing from "../../img/stocks_investing.png"
import irs_audit from "../../img/irs_audit.png"
import payroll from "../../img/payroll.png"
import agent_fee from "../../img/agent_fee.png"

export default function Financial() {
    const text1 = "The 20-minute consultation call is entirely free - no strings attached, honest!"
    const text2 = "The Broker will answer as many of your questions as possible in the time allotted"
    const text3 = "Initial calls are for informational purposes only and the CFP will not attempt to sell you anything - really!"
    const text4 = "At your discretion, you may choose to further explore the services of the professional you speak with the choice is entirely yours!"
    const text5 = "Equitysmith connects a network of insurance and financial services professionals to our customers. \nThe information conveyed during your call does not constitute paid professional advice and Equitysmith \nis indemnified from liability of any kind. The use of our service constitutes your acceptance of these terms."

    return (
        <>
            <div className="container">
                <div className="insurance-header">
                    <div className="insurance-content">
                        <h1 className="insurance-title">Getting expert{"\n"}<span class="blue">financial advice </span>just{"\n"}got a lot easier.</h1>
                    </div>
                    <div>
                        <h2 className="insurance-mini-title">Speak with an independent <text style={{fontWeight: 'bold'}}>Insurance Broker</text> today</h2>
                    </div>
                    <div>
                        <h2 className="insurance-mini-title2">How your free 15-minute call works:</h2>
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
                    <p className="scheduleText2">Our experienced <text style={{fontWeight: 'bold'}}><mark>Insurance</mark></text> professionals are ready to advise you on a variety of topics:</p>

                    <div className="item">
                        <img src={irs_audit} className="services" alt=""></img>
                        <span className="caption">IRS Audit</span>
                    </div>
                    <div className="item">
                        <img src={payroll} className="services" alt=""></img>
                        <span className="caption">Payroll</span>
                    </div>
                    <div className="item">
                        <img src={stocks_investing} className="services" alt=""></img>
                        <span className="caption">Cost Containment</span>
                    </div>
                    <div className="item">
                        <img src={tax_issues} className="services" alt=""></img>
                        <span className="caption">Tax Filing Review</span>
                    </div>
                    <div className="item">
                        <img src={cash_flow_analysis} className="services" alt=""></img>
                        <span className="caption">Investing</span>
                    </div>
                    <div className="item">
                        <img src={agent_fee} className="services" alt=""></img>
                        <span className="caption">Employee Compensation</span>
                    </div>

                    <h2 className="scheduleText3">Schedule your <span class="blue">free, no obligation</span> {"\n"}telephone consultation now.</h2>

                    <button className="bookButton">Book my call</button>
                </div>

                <div className="sideBar"> 
                    <img src={insurance_betty} id="insurance_betty" alt=""></img>

                    <button className="scheduleButton">Schedule your free{"\n"}15-minute call now</button>

                    <img src={insurance_jane} id="insurance_jane" alt=""></img>
                </div>
            </div>
        </>
    )
}