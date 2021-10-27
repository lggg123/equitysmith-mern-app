import "./financial.css"

export default function Financial() {
    const text1 = "The 15-minute consultation call is entirely free - no strings attached, honest!"
    const text2 = "The CFP will answer as many of your questions as possible in the time allotted"
    const text3 = "Initial calls are for informational purposes only and the CFP will not attempt to sell you anything - really!"
    const text4 = "At your discretion, you may choose to further explore the services of the professional you speak with the choice is entirely yours!"
    const text5 = "Equitysmith connects a network of insurance and financial services professionals to our customers. The information conveyed during your call does not constitute paid professional advice and Equitysmith is indemnified from liability of any kind. The use of our service constitutes your acceptance of these terms."

    return (
        <>
            <h1>Getting expert <span class="blue">financial advice just got a lot easier.</span></h1>
            <h2 class="light">Speak with a <span class="bold">Certified Financial Planner (CFP) today</span></h2>
            <h2 class="blue">How your free 15-minut call works:</h2>
            <p><strong>{text1}</strong></p>
            <p><strong>{text2}</strong></p>
            <p><strong>{text3}</strong></p>
            <p><strong>{text4}</strong></p>
            <p id="grey">{text5}</p>
            <img></img>
            <button></button>
            <h1>How can we help you <span id="blue">today?</span></h1>
            <h2 class="light">Our experienced <span id="bold-highlight">Certified Financial Planners</span> are ready to advise you on a variety of financial management topics:</h2>
            <img></img>
            <button></button>
            <img></img>
        </>
    )
    
}