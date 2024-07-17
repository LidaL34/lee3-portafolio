// Components
import { ContactMe, Footer, Header, SkillCard, Title } from './components'
import { Button, DecoComponent, Social } from './ui'

import { InteractiveIcon, PixelIcon, UserIcon } from './components/Icons';
import { HeroSvg } from './components/HeroSvg';
import { HeroMobileSvg } from './components/HeroMobileSvg';
import { SectionLayout } from './components/SectionLayout';
import { PrimaryButton } from './components/PrimaryButton';
import { Bento } from './components/Bento';

function App() {

  return (
    <div className='overflow-x-hidden relative'>
      <Header />

      <div className='hidden animated-hero md:block w-[500px] rotate-0 absolute right-0 top-0 -z-10'>
        <HeroSvg />
      </div>

      <div className='w-screen md:hidden animated-hero'>
        <HeroMobileSvg />
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

        <SectionLayout className='flex flex-col gap-12'>
          <div className="flex items-end justify-between">
            <Title
              sectionTitle='My Work'
            />
            <PrimaryButton href='https://www.behance.net/lidaloaiza'>More Projects</PrimaryButton>
          </div>

          <Bento />
        </SectionLayout>

        <SectionLayout className='flex items-center justify-center gap-24 flex-wrap'>
          <img className='hidden md:block' src='/Lee3.jpeg' alt="Lee-Sory-Image" />

          <article className='flex flex-col gap-6 max-w-xl'>
            <div className="flex flex-col gap-2">
              <Title sectionTitle='My Story' />
              <p className='text-[#7B7B7B]'>Lida Marcela Loaiza Perea</p>
            </div>
            <img className='md:hidden w-[80%] mx-auto' src='/Lee3.jpeg' alt="Lee-Sory-Image" />

            <p>
              I have always been passionate about
              creating art and finding creative solutions,
              that is what drove me to design.
              While discovering the world of interactive media,
              I found myself fascinated by UX/UI as a form to shape
              the world and I continue to express my creativity
              through this field.</p>

            <img className='w-64 mx-auto md:mx-0' src='/leeSign.svg' alt="Lee-sign" />
            <div className='flex justify-center md:justify-end'>
              <PrimaryButton href='https://drive.google.com/file/d/1EeOYpaiPAp7Tz1-JVElNoNTYBvdz6PjR/view'>My Resume</PrimaryButton>
            </div>
          </article>
        </SectionLayout>

        <SectionLayout className='flex flex-col-reverse md:flex-row items-start gap-16 md:gap-80 bg-[#0B0C10] md:h-[510px] pb-16 pt-24'>
          <div className='w-full md:w-[30dvw] my-auto'>
            <ContactMe />
          </div>

          <div className="flex flex-col gap-4 md:mt-16">
            <Title sectionTitle='Contact Me' />
            <p className='text-xl'>“Let’s work together to create <br /> something out of this world”</p>
          </div>
        </SectionLayout>

        <Footer />
      </main>
    </div>
  )
}

export default App
