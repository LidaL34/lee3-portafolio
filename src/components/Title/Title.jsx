// Eslint
/* eslint-disable react/prop-types */

// Component
import { DecoComponent } from '../../ui'

// Style
import './title.css'

export function Title({sectionTitle}) {
    return (
        <div className='flex flex-col gap-4'>
            <DecoComponent />
            <h1 className='font-bold text-4xl md:text-6xl'>
                {sectionTitle}
            </h1>
        </div>
    )
}