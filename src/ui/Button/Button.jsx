//eslint
/* eslint-disable react/prop-types */

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Style
import './button.css'

export function Button({link, className, name }) {

    const handleOnClick = () => {
        if (link) {
            window.open(link, '_blank')
            console.log(link);
        }
    }

    return (
        <button
            className={className}
            type="submit"
            onClick={link ? handleOnClick : undefined}
            >
            {name}
            <div className="btn-right">
                <IoIosArrowRoundForward
                className="web-icon" />
            </div>
        </button>
    )
}