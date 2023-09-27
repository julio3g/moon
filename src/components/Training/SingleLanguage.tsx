interface SingleLanguageProps {
  name: string
  level: 'Básico' | 'Intermediário' | 'Avançado' | 'Fluente'
}

export function SingleLanguage({ name, level }: SingleLanguageProps) {
  return (
    <p className="text-zinc-200 font-semibold">
      {name}
      <span className="text-zinc-600 font-medium"> / {level}</span>
    </p>
  )
}
