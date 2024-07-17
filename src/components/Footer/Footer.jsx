// Images
import logoImg from '/lee3-logo.svg'

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBehance } from "react-icons/fa6";

// Styles
import { Social } from '../../ui';

export function Footer() {

    const icons = [IoLogoInstagram, IoLogoLinkedin, FaBehance]

    return (
        <footer className='px-4 md:px-[104px] flex flex-col md:flex-row gap-12 -mt-24 items-center justify-between py-6'>
            <img className='w-6 md:w-12' src={logoImg} alt='Lee3-Logo-Img' />
            <div className="flex gap-4">
                <Social/>
            </div>
            <p>© 2024 Lee3.</p>
        </footer>
    )
}