import Typed from 'typed.js'
import { useRef, useEffect } from 'react'

const HeroSection = () => {
  const elm = useRef(null)
  useEffect(
    () => {
      const typed = new Typed(
        elm.current,
        {
          strings: ['Android Development', 'Web Development', 'IoT', 'AI/ML'],
          typeSpeed: 30,
          backSpeed: 30,
          smartBackspace: true,
          loop: true
        }
      )
      return () => {
        typed.destroy()
      }
    }, []
  )
  return (
    <div className="flex flex-col items-start justify-center gap-2 mt-32 w-full px-4 lg:items-center lg:mt-20">
        <h2 className="text-5xl font-bold lg:text-8xl"><span className="text-yellow-500">Hi</span> I'm</h2>
        <h2 className="text-5xl font-bold lg:text-8xl">Chanchal <span className="text-yellow-500">Roy</span></h2>
        <p className="text-xl mt-4 lg:text-2xl lg:mt-12">pationate about -</p>
        <p className="font-semibold text-2xl lg:text-5xl"><span ref={elm}></span></p>

        <div className="flex flex-col items-center justify-center text-center w-full text-2xl gap-4 mt-12 font-semibold lg:w-auto lg:flex-row lg:gap-12 lg:text-3xl">
            <a href="#" className="bg-black text-yellow-300 w-full rounded-xl py-3 lg:px-16">GitHub</a>
            <a href="#" className="bg-yellow-300 text-black w-full rounded-xl py-3 lg:px-16">Resume</a>
        </div>
    </div>
  )
}

export default HeroSection