import { Language } from '../Language'

interface JobProps {
  company: string
  description: string
  time: string
  office: string
  languages: string[]
}

export function Job({
  company,
  description,
  time,
  office,
  languages,
}: JobProps) {
  return (
    <div className="grid gap-6 relative bg-zinc-950 rounded-xl p-4 before:block before:w-1 before:h-5 before:absolute before:bg-gradient-subtitle before:-left-1 before:top-4 sm:grid-cols-2 lg:max-w-xl lg:mx-auto">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">{company}</h3>
        <p className="text-zinc-500 text-sm">{description}</p>
        <time className="text-zinc-600 text-sm md:absolute md:-left-20">
          {time}
        </time>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">{office}</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((code) => (
            <Language key={code} code={code} />
          ))}
        </div>
      </div>
    </div>
  )
}
