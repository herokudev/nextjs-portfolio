import Navbar from '../components/Navbar';
import Contact from '../components/Contact'
import StarsCanvas from '../components/canvas/Stars'
import Linkedin from '../components/Linkedin'


export default function ContactPage() {

  return (
    <main className='relative z-0 bg-primary'>
      <Navbar />
      <br />
      <br />
      <br />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Linkedin />

    </main>
  )
}
