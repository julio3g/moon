import Link from 'next/link'

interface SingleCourseProps {
  name: string
  time: number
  href: string
}

export function SingleCourse({ name, time, href }: SingleCourseProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 flex justify-between items-center rounded-xl border-2 border-transparent hover:border-violet-500 hover:bg-zinc-900 duration-200"
    >
      <h4 className="font-semibold">{name}</h4>
      <span className="text-sm text-zinc-500 font-medium">{time}h</span>
    </Link>
  )
}
