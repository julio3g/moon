import { ReactNode } from 'react'

interface SubsectionProps {
  name: string
  icon: ReactNode
}

export function Subsection({ name, icon }: SubsectionProps) {
  return (
    <h3 className="flex gap-2 font-semibold">
      {icon}
      <span>{name}</span>
    </h3>
  )
}
