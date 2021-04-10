import React from "react";

import { StaticImage } from "gatsby-plugin-image"

const ContactHeader = () => {

    return (
        <div className="bg-gray-100 flex items-center justify-evenly flex-col h-36 sm:flex-row sm:h-12 text-center border-gray-200 border-2">
            <div className="flex"><StaticImage src="../../images/phone_icon.png" alt="Numéro de téléphone" width={28} height={28} layout="fixed" placeholder="blurred" /> <p>819-692-6788</p></div>
            <div className="flex"><StaticImage src="../../images/mail_icon.png" alt="Numéro de téléphone" width={28} height={28} layout="fixed" placeholder="blurred" /> <p className="ml-2">info@asphalte-911.com</p></div>
            <div className="flex"><StaticImage src="../../images/adress_icon.png" alt="Numéro de téléphone" width={28} height={28} layout="fixed" placeholder="blurred" /> <p className="ml-2">408 Rue des Érables, Trois-Rivières, QC G8T 5H7</p></div>
        </div>
    );
}
export default ContactHeader;
