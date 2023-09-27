'use client'

import Document from '@/assets/document.svg'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import Link from 'next/link'
import { Logo } from './Logo'
import { NavButton } from './NavButton'

export function Header() {
  const { height } = useWindowDimensions()

  const goToPosition = (position: number) => {
    window.scrollTo({ top: position, behavior: 'smooth' })
  }

  return (
    <header className="bg-zinc-900/20 fixed w-full top-0 backdrop-blur-sm z-10">
      <nav className="p-4 md:px-8 md:py-6 m-auto flex items-center justify-center flex-wrap md:justify-between max-md:gap-1">
        <Logo />
        <div className="flex md:gap-2 gap-1 flex-wrap justify-center">
          <NavButton onClick={() => goToPosition(0)} text="Home" />
          <NavButton onClick={() => goToPosition(height - 100)} text="Sobre" />
          <NavButton
            onClick={() => goToPosition(height * 2 - 100)}
            text="Experiência"
          />
          <NavButton
            onClick={() => goToPosition(height * 3 - 100)}
            text="Formação"
          />
          {/* <NavButton
            onClick={() => goToPosition(height * 4 - 100)}
            text="Projetos"
          /> */}
          <NavButton
            onClick={() => goToPosition(height * 5 - 100)}
            text="Contato"
          />
        </div>
        <Link
          href="/cv.pdf"
          target="_blank"
          className="p-1 rounded-lg hover:bg-zinc-900 duration-150"
        >
          <Document />
        </Link>
      </nav>
    </header>
  )
}
