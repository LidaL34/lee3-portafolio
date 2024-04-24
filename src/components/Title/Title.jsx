// Eslint
/* eslint-disable react/prop-types */

// Component
import { DecoComponent } from '../../ui'

// Style
import './title.css'

export function Title({sectionTitle}) {
    return (
        <div className="section-title">
            <DecoComponent />
            <h1>
                {sectionTitle}
            </h1>
        </div>
    )
}