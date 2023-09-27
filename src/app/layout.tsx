import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bem vindo ao meu portfólio! - Julio Cesar Orso',
  description: 'Portfólio de um Dev Full Stack JS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-200 font-medium`}
      >
        {children}
      </body>
    </html>
  )
}
