import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Resume from './Resume'

const App = () => {
  return (
    <div className='w-full overflow-hidden' id='home'>
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App