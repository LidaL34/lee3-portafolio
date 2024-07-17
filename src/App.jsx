// Data
import { socialLinks } from './const/socialLinks';
import heroImg from './assets/images/Lee3.jpeg'
import myStoryImg from './assets/images/lee-my-story.jpg'
import leeSign from './assets/images/lee-sign.svg'

// Components
import { ContactMe, Footer, Header, Project, SkillCard, Title } from './components'
import { Button, DecoComponent, Social } from './ui'

import { InteractiveIcon, PixelIcon, UserIcon } from './components/Icons';
import { HeroSvg } from './components/HeroSvg';
import { HeroMobileSvg } from './components/HeroMobileSvg';
import { SectionLayout } from './components/SectionLayout';

function App() {

  return (
    <>
      <Header />

      {/* <picture className='hidden md:block rotate-0 absolute right-0 top-0 -z-10'>
        <img className='w-[600px]' src="/heroBg.svg" alt="" />
      </picture> */}

      <div className='hidden animated-hero md:block w-[500px] rotate-0 absolute right-0 top-0 -z-10'>
        <HeroSvg/>
      </div>

      <div className='w-screen md:hidden animated-hero'>
        <HeroMobileSvg/>
      </div>

      <main className='mt-0 md:mt-44 flex flex-col gap-[120px] md:gap-[176px] text-sm md:text-base'>

        <SectionLayout>
          <article className='flex flex-col items-center md:items-start gap-4 md:gap-8 text-balance max-w-xl'>

            <div>
              <h2 className='font-bold text-4xl md:text-8xl'>Empathy</h2>
              <span className='flex items-center gap-2 md:mt-4'>
                <DecoComponent />
                <h2 className='font-medium text-3xl md:text-7xl'>In Pixels.</h2>
              </span>
            </div>

            <p className='text-[16px] md:text-2xl text-center md:text-left text-[#DEDEF8] font-regular'>Creating pixel-perfect designs with a customer-centric experience</p>

            <div className='flex items-center gap-4 md:gap-6'>
              <Social />
            </div>
          </article>
        </SectionLayout>

        <SectionLayout className='flex flex-col gap-8'>
          <article className='flex flex-wrap flex-row items-center gap-4 md:gap-8 justify-center'>
            <SkillCard
              icon={<PixelIcon />}
              title={'Pixel Perfect'}
              desc={`Elevating design to the next level, 
              ensuring every pixel aligns 
              for a flawless digital experiences.`}
            />
            <SkillCard
              icon={<UserIcon />}
              title={'User Centered'}
              desc={`Designing experiences tailored to every User,
            because their needs come first.`}
            />
            <SkillCard
              icon={<InteractiveIcon />}
              title={'Interactive'}
              desc={`Creating designs  
            powered by strategic interaction that 
            ensure high usability.`}
            />
          </article>
        </SectionLayout>

        <SectionLayout
          id='myWork'
          className="my-work-section">
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
        </SectionLayout>

        <SectionLayout
          id='myStory'
          className="my-story container">
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
        </SectionLayout>

        <SectionLayout
          id='contact'
          className="contact">
          <ContactMe />
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
        </SectionLayout>
        <Footer />
      </main>
    </>
  )
}

export default App
