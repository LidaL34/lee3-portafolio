// Data
import { headerNavLinks } from '../../const/headerNavLinks';

// Images
import lee3logo from '/lee3-logo.svg'

// Styles
import './header.css';

export function Header() {

    const handleOnClick = (scrollId) => {

        if (scrollId) {
            console.log(scrollId);
            const element = document.getElementById(scrollId)
            element.scrollIntoView({behavior : 'smooth'})
        }

    }


    return (
        <>
            <header className="header container">
                <img src={lee3logo} alt="lee3-logo" />
                <div className="links">
                    <ul>
                        {
                            headerNavLinks.map(({ id, name, scrollTo }) => {
                                return (
                                    <li 
                                    key={id}
                                    onClick={() => handleOnClick(scrollTo)}>
                                        {name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </header>
        </>
    )
}