import React from 'react'
import NavbarMain from './navbar/NavbarMain'
import HeroMain from './hero/HeroMain'
import AboutMain from './about/AboutMain'
import ExperienceMain from './experience/ExperienceMain'
import ProjectMain from './project/ProjectMain'
import ResumeMain from './resume/ResumeMain'
import ContactMain from './contact/ContactMain'
import FooterMain from './footer/FooterMain'

const Home = () => {
  return (
    <div className='w-full overflow-hidden' id='home'>
        <NavbarMain/>
        <HeroMain/>
        {/* <AboutMain/>
        <ExperienceMain/>
        <ProjectMain/>
        <ResumeMain/>
        <ContactMain/>
        <FooterMain/> */}
    </div>
  )
}

export default Home