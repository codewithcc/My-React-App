import HamburgerMenu from "./HamburgerIcon"
import { useState } from "react"
import Link from 'react-router-dom'

const Header = () => {
    const [ open, setOpen ] = useState(false);
    const baseMenuClass = "flex flex-col items-center justify-center gap-6 text-xl bg-yellow-300 rounded-2xl py-4 transition-all ease-linear duration-300"
    const menuClass = `${baseMenuClass} ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`
    const menuClose = () => { setOpen(false) }

    return (
        <header className="px-4 pt-4 sticky top-0 z-50 lg:px-6 lg:pt-6">
            <div className="flex items-center justify-between bg-yellow-300 rounded-2xl py-6 lg:rounded-3xl">
                <div className="px-4 lg:px-6">
                    <h1 className="font-bold text-2xl lg:text-4xl">Code with Cc</h1>
                </div>
                <ul className="hidden lg:flex items-center gap-8 text-xl px-6">
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/aboutme'>About</Link>
                    <Link
                        to='/contact'
                        className="bg-black text-yellow-300 px-6 py-2 rounded-full"
                    >
                        Contact
                    </Link>
                </ul>
                <HamburgerMenu open={open} setOpen={setOpen} />
            </div>
            <div className="absolute top-20 left-0 w-full px-4">
                <ul className={menuClass}>
                    <Link
                        to='/'
                        onClick={menuClose}
                    >
                        Home
                    </Link>
                    <Link
                        to='/'
                        onClick={menuClose}
                    >
                        Services
                    </Link>
                    <Link
                        to='/'
                        onClick={menuClose}
                    >
                        Projects
                    </Link>
                    <Link
                        to='/'
                        onClick={menuClose}
                    >
                        About Me
                    </Link>
                    <Link
                        to='/'
                        onClick={menuClose}
                        className="bg-black text-yellow-300 px-6 py-2 rounded-full"
                    >
                        Contact
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header