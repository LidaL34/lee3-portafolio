// React
import { useForm, ValidationError } from '@formspree/react';

// Compenents
import { Button, Input } from '../../ui';

// Style
import './contactform.css'


export function ContactMe() {

    const [state, handleSubmit] = useForm("myyrllrd");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="contact-form">
            <div className="input-group">
                <Input
                    type={'text'}
                    name={'name'}
                    id={'name'}
                />
                <label htmlFor="name">
                    Your Name
                </label>
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="input-group">
                <Input
                    type={'email'}
                    name={'email'}
                    id={'email'}
                />
                <label htmlFor="email">
                    Your Email
                </label>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="input-group">
                <textarea
                    placeholder='Tell me about your idea'
                    rows={10}
                    name='message'
                    id='message'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <Button
                className={'secondary-btn'}
                name={'Submit'} />
        </form>
    )
}