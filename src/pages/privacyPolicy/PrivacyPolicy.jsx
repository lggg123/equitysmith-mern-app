import "./privacy-policy.css"

export default function PrivacyPolicy() {
    const bold_text = "Your trust and the privacy of your personal infomation is important to us. For this reason,\nwe have the most stringent Privacy Policy possible."
    const text_sect1 = "The data you provide to us when you schedule your Advisor Call (name, email, and telephone) will only be used\nby the Adivsor and Equitysmith. We will never sell, rent, or otherwise make available your information to a\nthird party or anyone else - ever. Should you elect to opt out of our email list, you can notify us at any time on\nour website("
    const text_sect2 = ") or by clicking on the Opt Out button at the bottom of any of our email\nmessages. If you have joined our VIP Club, your mailing address is also protected and will only be used to ship\nyour free book selections and other benefits of our program (discount club materials and occasional printed\nmaterials sent directly by Equitysmith). If at any time you wish to be removed from the email list of an\nAdvisor, please contact them directly. If your request is not honored within one-week period, contact us by\nemail ("
    return (
        <>
            <div class="privacyContent">
                <div className="privacyTitle"><h1><u>Equi</u>tysmith Privacy Statement:</h1></div>
                <p className="bold-font">{bold_text}</p>
                <p className="privacyText">{text_sect1}<a href="https://www.Equitysmith.com" className="blue_link">www.Equitysmith.com</a>{text_sect2}<a href="mailto:optout@equitysmith.com" className="blue_link">optout@equitysmith.com</a>) to alert us.</p>
            </div>
        </>
    )
}