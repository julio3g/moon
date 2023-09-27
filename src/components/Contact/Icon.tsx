import { ReactNode } from 'react'

interface IconProps {
  icon: ReactNode
  url: string
}

export function Icon({ icon, url }: IconProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="p-2 border-2 border-transparent rounded-lg hover:border-zinc-900 duration-150"
      rel="noreferrer"
    >
      {icon}
    </a>
  )
}
