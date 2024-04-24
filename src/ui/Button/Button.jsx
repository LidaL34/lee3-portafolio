//eslint
/* eslint-disable react/prop-types */

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Style
import './button.css'

export function Button({link, className, name, scrollTo }) {

    const handleOnClick = () => {
        if (link) {
            window.open(link, '_blank')
            console.log(link);
        } else if (scrollTo) {
            const element = document.getElementById(scrollTo)
            if (element) {
                element.scrollIntoView({behavior : 'smooth'})
            }
        }
    }

    return (
        <button
            className={className}
            type="submit"
            onClick={link || scrollTo ? handleOnClick : undefined}
            >
            {name}
            <div className="btn-right">
                <IoIosArrowRoundForward
                className="web-icon" />
            </div>
        </button>
    )
}