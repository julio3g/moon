import { Subtitle } from '../Subtitle'

import Book from '@/assets/book.svg'
import Language from '@/assets/language.svg'
import { SingleCourse } from './SingleCourse'
import { SingleLanguage } from './SingleLanguage'
import { Subsection } from './Subsection'

export function Training() {
  return (
    <section className="py-8 md:py-16 md:max-w-5xl mx-auto px-4">
      <Subtitle subtitle="Formação" />
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-16">
        <p className="text-zinc-300 font-normal md:text-lg">
          Atualmente estou cursando <b>Ciência da Computação 👨‍💻</b>. Além disso
          me mantenho sempre atualizado com cursos intensivos online.
        </p>
        <div className="flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            <Subsection icon={<Book />} name="Cursos Intensivos" />
            <div className="flex flex-col gap-2">
              <SingleCourse
                href="https://app.rocketseat.com.br/certificates/da00ba43-e783-4e1a-a2c0-52ac9968ffbb"
                name="NodeJS"
                time={100}
              />
              <SingleCourse
                href="https://app.rocketseat.com.br/certificates/b6e769ca-3fd4-4cea-85a1-f023274a3dc0"
                name="ReactJS"
                time={100}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Subsection icon={<Language />} name="Idiomas" />
            <div className="flex flex-col gap-2">
              <SingleLanguage name="Inglês" level="Básico" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
