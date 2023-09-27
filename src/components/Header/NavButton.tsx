import { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text: string
}

export function NavButton({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-lg px-2 md:px-4 py-2 max-md:text-sm font-medium text-zinc-100 transition-colors duration-150 hover:bg-zinc-200/10"
    >
      {text}
    </button>
  )
}
