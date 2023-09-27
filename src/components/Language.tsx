interface LanguageProps {
  code: string
}

export function Language({ code }: LanguageProps) {
  return (
    <code className="text-sm px-2 py-1 rounded-md bg-zinc-800 leading-4 font-semibold">
      {code}
    </code>
  )
}
