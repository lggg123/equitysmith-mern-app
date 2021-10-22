import "./home.css"

export default function Home() {
    const testimonial_1 = '"I got answers to my tax and debt management questions quickly and with suggestions on how to move forward."'
    const testimonial_2 = '"I never fully understood my 401(k) until I spoke with a Certified Financial Planner."'
    const testimonial_3 = '"Student debt was a real challenge which was forcing me to put off creating a budget and a savings plan. Not anymore!"'
    const name_loc1 = " Hector \n Camarillo,Calif"
    const name_loc2 = " Susan \n Agoura Hills,Calif"
    const name_loc3 = " Brian \n Ventura,Calif"
    let newNameLoc1 = name_loc1.split('\n').map(i =>  {
        return <p>{i}</p>
    })
    let newNameLoc2 = name_loc2.split('\n').map(i => {
        return <p>{i}</p>
    })

    let newNameLoc3 = name_loc3.split('\n').map(i => {
        return <p>{i}</p>
    })
    return (
        <>
            <h1>Getting expert <span className="title">insurance</span> and <span className="title">financial advice</span> just got a lot easier!</h1>
            <h1>How our program works:</h1>
            <h1>We provide free 15-minute calls with <span className="title">Financial Service Professionals</span> near you.</h1>
            <h1>You're in complete control all the way:</h1>
            <ul>
                <li>There is no cost for the call and absolutely no obligation</li>
                <li>The Advisor you speak with will answer as many of your questions as possible, no selling - we promise</li>
                <li>At your discretion, you may choose to further explore the service of the professional you speak with - the choice is entirely yours</li>
            </ul>
            <div>
                <p>{testimonial_1}</p>
                <p className="NameLoc">{newNameLoc1}</p>
            </div>
            <div>
                <p>{testimonial_2}</p>
                <p className="NameLoc">{newNameLoc2}</p>
            </div>
            <div>
                <p>{testimonial_3}</p>
                <p className="NameLoc">{newNameLoc3}</p>
            </div>
        </>
    )
}