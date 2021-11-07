import "./financial.css"
import aboutUs1 from "../../img/about-us1.png"
import financial_tom from "../../img/financial_tom.png"
import tax_issues from "../../img/tax_issues.png"
import cash_flow_analysis from "../../img/cash_flow_analysis.png"
import stocks_investing from "../../img/stocks_investing.png"
import educational_saving from "../../img/educational_saving.png"
import estate_planning from "../../img/estate_planning.png"
import budgeting from "../../img/budgeting.png"

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
                        <h1 className="finance-title">Getting expert <span class="blue">financial</span>{"\n"}<span class="blue">advice </span>just got a lot{"\n"}easier.</h1>
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
                    <h2 className="scheduleText2">Our experienced <text style={{fontWeight: 'bold'}}><mark>Certified Financial Planner (CFP) </mark></text> are ready to advise you on a variety of financial management topics:</h2>

                    <div className="item">
                        <img src={tax_issues} className="services" alt=""></img>
                        <span className="caption">Tax Issues</span>
                    </div>
                    <div className="item">
                        <img src={cash_flow_analysis} className="services" alt=""></img>
                        <span className="caption">Cash Flow Analysis</span>
                    </div>
                    <div className="item">
                        <img src={stocks_investing} className="services" alt=""></img>
                        <span className="caption">Stocks Investing</span>
                    </div>
                    <div className="item">
                        <img src={educational_saving} className="services" alt=""></img>
                        <span className="caption">Educational Savings</span>
                    </div>
                    <div className="item">
                        <img src={estate_planning} className="services" alt=""></img>
                        <span className="caption">Estate Planning</span>
                    </div>
                    <div className="item">
                        <img src={budgeting} className="services" alt=""></img>
                        <span className="caption">Budgeting</span>
                    </div>

                    <h2 className="scheduleText2">Schedule your <span class="blue">free, no obligation</span> {"\n"}telephone consultation now.</h2>

                    <button className="bookButton">Book my call</button>
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