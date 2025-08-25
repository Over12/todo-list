import { IconSun, IconMoon, IconMenuDeep, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      <nav className='fixed px-10 sm:px-15 py-5 top-0 left-0 right-0 flex items-center justify-between text-text bg-background/50 backdrop-blur-lg border-b border-primary transition-colors z-50'>
        <div className='text-3xl font-bold animate-blurred-fade-in animate-duration-500'>
          ToDo List
        </div>
        <ul className='hidden sm:flex gap-10 text-lg animate-blurred-fade-in animate-duration-500'>
          <Navigation />
        </ul>
        <button onClick={handleDarkMode} className={`hidden sm:flex cursor-pointer items-center justify-center rounded-full border-2 size-10 animate-pulse-fade-in animate-duration-500 ${darkMode ? 'border-gray-400 bg-gray-400/30' : 'border-yellow-400 bg-yellow-400/30'}`}>
          {darkMode ? <IconMoon className='text-gray-400 size-7' /> : <IconSun className='text-yellow-400 size-7' />}
        </button>
        <button onClick={handleMenuToggle} className='sm:hidden focus:outline-none animate-pulse-fade-in animate-duration-500'>
          {menuOpen ? <IconX className='size-9 text-text' /> : <IconMenuDeep className='size-9 text-text' />}
        </button>
      </nav>
      <ul className={`fixed sm:hidden top-0 right-0 bottom-0 z-40 h-dvh w-dvw uppercase bg-background text-text flex flex-col justify-center items-center gap-10 text-xl font-semibold transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Navigation handleMenuToggle={handleMenuToggle} />
      </ul>
    </>
  )
}

function Navigation({ handleMenuToggle }: { handleMenuToggle?: () => void }) {
  return (
    <>
      <li><a href="#inicio" onClick={handleMenuToggle}>Inicio</a></li>
      <li><a href="#contacto" onClick={handleMenuToggle}>Contacto</a></li>
    </>
  )
}
