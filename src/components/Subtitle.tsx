interface SubtitleProps {
  subtitle: string
}

export function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-center text-zinc-100 mb-6 md:mb-8 after:flex after:h-1 after:w-12 md:after:w-16 after:bg-gradient-subtitle after:rounded-sm after:m-auto">
      {subtitle}
    </h2>
  )
}
