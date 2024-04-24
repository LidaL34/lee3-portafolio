// Images
import logoImg from '/lee3-logo.svg'

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBehance } from "react-icons/fa6";

// Styles
import './footer.css'
import { socialLinks } from '../../const/socialLinks';
import { Social } from '../../ui';

export function Footer() {

    const icons = [IoLogoInstagram, IoLogoLinkedin, FaBehance]

    return (
        <footer>
            <img src={logoImg} alt='Lee3-Logo-Img' />
            <div className="social-media">
                {
                    socialLinks.map(({ id, link }, i) => {
                        const IconComponent = icons[i]
                        return (
                            <Social
                                key={id}
                                link={link}
                                icon={<IconComponent />} />
                        )
                    })
                }
            </div>
            <p>© 2024 Lee3.</p>
        </footer>
    )
}