import Image from 'next/image'
import logo_color from '../assets/web.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'
import StarsCanvas from './components/canvas/Stars'
import Linkedin from './components/Linkedin'

export default function Home() {
  return (
    <main className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
            <Experience />
            <Tech />
            <Works />
            
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
            <Linkedin />         
    </main>
  )
}
