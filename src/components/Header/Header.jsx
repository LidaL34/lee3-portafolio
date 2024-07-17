// Data
import { headerNavLinks } from '../../const/headerNavLinks';

// Images
import lee3logo from '/lee3-logo.svg'

export function Header() {

    const handleOnClick = (scrollId) => {

        if (scrollId) {
            console.log(scrollId);
            const element = document.getElementById(scrollId)
            element.scrollIntoView({ behavior: 'smooth' })
        }

    }


    return (
        <>
            <header className="hidden md:grid place-items-center absolute w-full top-0 py-8">
                <picture>
                    <img className='w-[29px]' src={lee3logo} alt="lee3-logo" />
                </picture>
            </header>
        </>
    )
}