// Eslint
/* eslint-disable react/prop-types */

// Style
import './skillcard.css'


export function SkillCard({icon, title, desc}) {
    return (
        <div className="skill-card">
            {icon}
            <h3>
                {title}
            </h3>
            <p>
               {desc}
            </p>
        </div>
    )
}