// Data
import { headerNavLinks } from '../../const/headerNavLinks';

// Images
import lee3logo from '/lee3-logo.svg'

// Styles
import './header.css';

export function Header() {
    return (
        <>
            <header className="header container">
                <img src={lee3logo} alt="lee3-logo" />
                <div className="links">
                    <ul>
                        {
                            headerNavLinks.map(({ id, name }) => {
                                return (
                                    <li key={id}>
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