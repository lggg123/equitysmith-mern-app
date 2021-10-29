

export default function Insurance() {
    const text1 = "The 15-minute consultation call is entirely free - no strings attached, honest!"
    const text2 = "The Broker will answer as many of your questions as possible in the time allotted"
    const text3 = "Initial calls are for informational purposes only and the Broker will not attempt to sell you anything - really!"
    const text4 = "At your discretion, you may choose to further explore the services of the professional you speak with the choice is entirely yours"
    const text5 = "Equitysmith connects a network of insurance and financial services professionals to our customers. The information conveyed during your call does not constitute paid professional advice and Equitysmith is indemnified from liability of any kind. The use of our service consitutes your acceptance of these terms."

    return (
        <>
            <h1>Getting expert <span id="blue">insurance advice</span> just got a lot easier.</h1>
            <h2 className="light">Speak with an independent <span id="bold">Insurance Broker</span> today</h2>
            <h2 className="blue">How your free 15-minute call works:</h2>
            <p><strong>{text1}</strong></p>
            <p><strong>{text2}</strong></p>
            <p><strong>{text3}</strong></p>
            <p><strong>{text4}</strong></p>
            <p>{text5}</p>
            <img></img>
            <button>Schedule your free 15-minute call now</button>
            <h1>How can we help you <span id="blue">today?</span></h1>
            <h2 className="light">Our experienced <span id="bold-highlight">Insurance</span> professionals are ready to advise you on a variety of topics:</h2>
            <img></img>
            <h2>Schedule your <span id="blue">free, no obligation telephone consultation now.</span></h2>
            <button>Book my call</button>
            <img></img>
        </>
    )
}