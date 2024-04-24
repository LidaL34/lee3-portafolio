//eslint
/* eslint-disable react/prop-types */

// Style
import './input.css'

export function Input({type, name, id}) {
    return(
        <input placeholder='' type={type} name={name} id={id} required />
    )
}