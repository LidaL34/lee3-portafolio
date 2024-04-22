// Data
import { socialLinks } from './const/socialLinks';
import heroImg from './assets/images/Lee3.png'

// Components
import { Header } from './components'
import { Button, Social } from './ui'

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBehance } from "react-icons/fa6";

// Styles
import './App.css'

function App() {

  const icons = [IoLogoInstagram, IoLogoLinkedin, FaBehance]

  return (
    <>
      <Header />
      <div className="hero container">

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
        <img src={heroImg} alt="Hero-Img-Lee3" />
        <div className='hero-info-container'>
          <div className="title">
            <h1 id='empathy'>
              Empathy
            </h1>
            <h1 id='inpixels'>
              in Pixels.
            </h1>
          </div>
          <p>
            Creating pixel-perfect designs with a customer-centric experience
          </p>
          <Button
            className={'primary-btn'}
            name={'Button'} />
        </div>
      </div>


    </>
  )
}

export default App
