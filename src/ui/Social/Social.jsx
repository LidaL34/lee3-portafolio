// Eslint
/* eslint-disable react/prop-types */


// Style
import './social.css'

    export function Social({link, icon}) {
    return(
        <a 
        href={link}
        className="social">
        {icon}
        </a>
    )
}