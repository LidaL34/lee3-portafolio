// React
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

// Compenents
import { Input, TextArea } from '../../ui';

// Style
import './contactform.css'

const Loader = () => <svg  xmlns="http://www.w3.org/2000/svg"  width="100"  height="100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>

const Check = () => <svg  xmlns="http://www.w3.org/2000/svg"  width="100"  height="100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>


export function ContactMe() {

    const [state, handleSubmit] = useForm("myyrllrd");

    if (state.succeeded) {
        return <span className='grid place-items-center gap-4 w-full mt-12 h-full'><Check/> <p>Thank you for contacting me!</p></span>;
    }

    if (state.submitting) {
        return <span className='grid place-items-center w-full h-full mt-12 animate-spin'><Loader/></span>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-12 w-full">
            <Input
                type={'text'}
                name={'name'}
                id={'name'}
                label={'Name'}
            />

            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />

            <Input
                type={'email'}
                name={'email'}
                id={'email'}
                label={'Email'}
            />

            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <TextArea
                name={'idea'}
                id={'idea'}
                label={'Tell me about your idea'}
            />

            <ValidationError
                prefix="Idea"
                field="idea"
                errors={state.errors}
            />

            <button type='submit' className='p-2 w-full cursor-pointer hover:bg-[#00A3FF] transition-colors flex items-center justify-center text-md gap-2 border-2 border-[#00A3FF]'>
                Submit
            </button>
        </form>
    )
}