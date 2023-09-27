import { Subtitle } from '../Subtitle'
import { Job } from './Job'

export function Experiences() {
  return (
    <section className="bg-zinc-900 md:py-16 py-8">
      <Subtitle subtitle="Experiência" />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 md:gap-y-6 md:gap-x-0 lg:max-w-5xl mx-auto p-4 max-w-3xl">
        <p className="font-normal text-center max-w-md mx-auto md:text-left md:max-w-none">
          Desenvolvo pequenos projetos como o site da Contábil Vitória
          utilizando apenas
          <b> NextJS e Prismic</b>. Para aplicativos web como a rede social Dogs
          eu trabalhei no <b>UX</b> e <b>UI Design</b> do projeto.
        </p>
        <div className="flex flex-col gap-6 md:ml-24 col-span-2">
          <Job
            company="SZ Soluções"
            description="Desenvolvimento de e-commerces, automação de centros de distribuição e monitoramento de servidores usando NodeJS, React e React Native."
            time="2022-23"
            office="Dev JS Júnior/Pleno"
            languages={[
              'ReactJs',
              'NodeJS',
              'ERP',
              'React Native',
              'UI/UX Design',
            ]}
          />
          <Job
            company="Freelancer"
            description="Desenvolvimento de sites institucionais para empresa do mercado local e também lançamento de um influente blog de notícias esportivas."
            time="2020-22"
            office="Desenvolvedor Júnior"
            languages={['ReactJs', 'NodeJS', 'WordPress', 'UI/UX Design']}
          />
        </div>
      </div>
    </section>
  )
}
