//eslint
/* eslint-disable react/prop-types */

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Style
import './project.css'

export function Project({beLink, name, category }) {
    
    return (
        <a
        href={beLink} 
        className={` project ${name}`}>
            <div className="project-info">
                <p>{name} | {category}</p>
            <IoIosArrowRoundForward />
            </div>
        </a>
    )
}