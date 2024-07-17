//eslint
/* eslint-disable react/prop-types */
import { useState } from "react";

export function Input({ type, name, id, label }) {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className='relative group' htmlFor="">
            <input value={inputValue} onChange={handleChange} className='w-full focus:outline-none bg-transparent left-0 px-2 py-1 border-b border-[#00A3FF]' type={type} name={name} id={id} required />
            <label htmlFor={id} className={`absolute left-2 top-1 transition-transform ease-in-out duration-300 ${inputValue ? '-translate-y-6 text-xs' : 'group-focus-within:-translate-y-6 group-focus-within:text-xs'}`}>
                {label}
            </label>
        </div>
    )
}

export function TextArea({name, label, id }) {

    const [count, setCount] = useState('');

    const handleChange = (e) => {
        setCount(e.target.value)
    }

    return (
        <div className='relative group' htmlFor="">
            <textarea maxLength='1000' value={count} onChange={handleChange}  className='w-full h-[35px] resize-none outline-none transition-all ease-in-out duration-300 focus:h-[100px] bg-transparent left-0 px-2 py-1 border-b border-[#00A3FF]' name={name} id={id} required />
            <label htmlFor={id} className={`absolute left-2 top-1 duration-300 transition-transform ${count ? '-translate-y-6 text-xs' : 'group-focus-within:-translate-y-6 group-focus-within:text-xs'}`}>
                {label}
            </label>
            <span className="flex justify-end">
                <p className="text-white/60">{count.length}/1000</p>
            </span>
        </div>
    )
}