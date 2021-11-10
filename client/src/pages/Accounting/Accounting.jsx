import "./accounting.css"
import aboutUs1 from "../../img/about-us1.png"
import accounting_ted from "../../img/accounting_ted.png"
import financial_tom from "../../img/financial_tom.png"
import tax_issues from "../../img/tax_issues.png"
import cash_flow_analysis from "../../img/cash_flow_analysis.png"
import stocks_investing from "../../img/stocks_investing.png"
import payroll from "../../img/payroll.png"
import agent_fee from "../../img/agent_fee.png"
import irs_audit from "../../img/irs_audit.png"

export default function Accounting() {
    const text1 = "The 15-minute consultation call is entirely free - no strings attached, honest!"
    const text2 = "The CPA will answer as many of your questions as possible in the time allotted"
    const text3 = "Initial calls are for informational purposes only and the CPA will not attempt to sell you anything - really!"
    const text4 = "At your discretion, you may choose to further explore the services of the professional you speak with the choice is entirely yours!"
    const text5 = "Equitysmith connects a network of insurance and financial services professionals to our customers. \nThe information conveyed during your call does not constitute paid professional advice and Equitysmith \nis indemnified from liability of any kind. The use of our service constitutes your acceptance of these terms."

    return (
        <>
            <div className="container">
                <div className="accounting-header">
                    <div className="accounting-content">
                        <h1 className="accounting-title">Getting expert <span class="blue">accounting &</span>{"\n"}<span class="blue">tax advice </span>just got a lot easier.</h1>
                    </div>
                    <div>
                        <h2 className="accounting-mini-title">Speak with a <text style={{fontWeight: 'bold'}}>Certified Public Accountant (CPA) </text>today</h2>
                    </div>
                    <div>
                        <h2 className="accounting-mini-title2">How your free 15-minute call works:</h2>
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
                    <p className="scheduleText2">Our experienced <text style={{fontWeight: 'bold'}}><mark>Certified Public Accountant (CPA) </mark></text> are ready to advise you on a variety of financial management topics:</p>

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
                        <span className="caption">Cost</span>
                    </div>
                    <div className="item">
                        <img src={tax_issues} className="services" alt=""></img>
                        <span className="caption">Tax Filing Review</span>
                    </div>
                    <div className="item">
                        <img src={cash_flow_analysis} className="services" alt=""></img>
                        <span className="caption">Invest</span>
                    </div>
                    <div className="item">
                        <img src={agent_fee} className="services" alt=""></img>
                        <span className="caption">Agent Fee</span>
                    </div>

                    <h2 className="scheduleText3">Schedule your <span class="blue">free, no</span> obligation consultation now.</h2>

                    <button className="bookButton">Book my call</button>
                </div>

                <div className="sideBar"> 
                    <img src={aboutUs1} id="aboutUs" alt=""></img>

                    <button className="scheduleButton">Schedule your free{"\n"}15-minute call now</button>

                    <img src={accounting_ted} id="accounting_ted" alt=""></img>
                </div>
            </div>
        </>
    )
    
}
