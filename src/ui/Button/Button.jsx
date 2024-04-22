//eslint
/* eslint-disable react/prop-types */

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Style
import './button.css'

export function Button({ className, name }) {
    return (
        <button
            className={className}
            type="submit">
            {name}
            <div className="btn-right">
                <IoIosArrowRoundForward
                className="web-icon" />
            </div>
        </button>
    )
}