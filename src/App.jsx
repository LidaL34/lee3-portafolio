// Data
import { socialLinks } from './const/socialLinks';
import heroImg from './assets/images/Lee3.png'
import myStoryImg from './assets/images/lee-my-story.jpg'
import leeSign from './assets/images/lee-sign.svg'

// Components
import { ContactMe, Footer, Header, Project, SkillCard, Title } from './components'
import { Button, DecoComponent, Social } from './ui'

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBehance } from "react-icons/fa6";

import { TbCategoryPlus } from "react-icons/tb";
import { BiUserPin } from "react-icons/bi";

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
            <h1>
              Empathy
            </h1>
            <div className="deco-container">
              <DecoComponent />
              <h1>
                in Pixels.
              </h1>
            </div>
          </div>
          <p>
            Creating pixel-perfect designs with a customer-centric experience
          </p>
          <Button
            className={'primary-btn'}
            name={'Contact'} />
        </div>
      </div>
      <section className='skills-section container'>
        <Title
          sectionTitle={'Lee3'}
        />
        <article className="skills">
          <SkillCard
            icon={<TbCategoryPlus />}
            title={'Pixel Perfect'}
            desc={`Elevating design to the next level, 
              ensuring every pixel aligns 
              for a flawless digital experiences.`}
          />
          <SkillCard
            icon={<BiUserPin />}
            title={'User Centered'}
            desc={`Designing experiences tailored to every User,
             because their needs come first.`}
          />
          <SkillCard
            icon={<TbCategoryPlus />}
            title={'Interactive'}
            desc={`Creating designs  
            powered by strategic interaction that 
            ensure high usability.`}
          />
        </article>
      </section>

      <section className="my-work-section">
        <div className="my-work-title">
          <Title
            sectionTitle={'My Work'}
          />
          <Button
          link={'https://www.behance.net/lidaloaiza'}
            className={'primary-btn'}
            name={'More Projects'} />
        </div>

        <article className='projects-grid'>
          <Project
            beLink={'https://www.behance.net/gallery/158336877/NEXUS-UI-PROYECT'}
            name={'Nexus'}
            category={'UI Project'} />
          <Project
            beLink={'https://www.behance.net/gallery/172658785/Marketplace-UXUI-Project'}
            name={'Marketplace'}
            category={'UX UI Projct'} />
          <Project
          beLink={''}
            name={'Cleo'}
            category={'Metaverse Interface'} />
          <Project
            beLink={'https://www.behance.net/gallery/155575969/On-Check-UXUI-PROJECT'}
            name={'OnCheck'}
            category={'UX UI Projct'} />
        </article>
      </section>
      <section className="my-story container">
        <img src={myStoryImg} alt="Lee-Sory-Image" />
        <article className='story'>
          <div className="section-title">
            <DecoComponent />
            <h1>
              My Story
            </h1>
            <p>Lida Marcela Loaiza Perea</p>
          </div>
          <p>
            I have always been passionate about
            creating art and finding creative solutions,
            that is what drove me to design.
            While discovering the world of interactive media,
            I found myself fascinated by UX/UI as a form to shape
            the world and I continue to express my creativity
            through this field.</p>
            <img src={leeSign} alt="Lee-sign" />
            <Button
            link={'https://drive.google.com/file/d/1GmFm0CgRl8vtPTTWvOLQcdX5T8ahe9on/view?usp=sharing'}
            className={'primary-btn'}
            name={'My Resume'}
            />
        </article>
      </section>
      <section className="contact">
          <ContactMe/>
          <article>
            <h1>Contact</h1>
            <div className="deco-container">
              <DecoComponent />
              <h1>
                Me
              </h1>
            </div>
            <p>“Let’s work together to create something out of this world”</p>
          </article>
      </section>
      <Footer />
    </>
  )
}

export default App
