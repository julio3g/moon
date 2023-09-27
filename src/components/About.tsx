import { Subtitle } from './Subtitle'

export function About() {
  return (
    <section className="py-8 md:py-16 text-center max-w-5xl w-full md:max-w-5xl mx-auto px-4">
      <Subtitle subtitle="Sobre" />
      <p className="max-w-3xl m-auto text-sm md:text-base font-medium text-zinc-300">
        Sou um desenvolvedor Full Stack especializado em tecnologias atuais como{' '}
        <b className="text-zinc-100">React, React Native e NodeJS</b>. Minha
        abordagem centrada no usuário e minha habilidade para colaborar
        eficazmente em equipes multidisciplinares me permitem criar soluções web
        e móveis de alta qualidade. Ao longo da minha carreira, alcancei marcos
        significativos, como a implementação bem-sucedida de um aplicativo de
        e-commerce de médio porte, sempre com um compromisso contínuo para
        aprimoramento profissional e inovação.
      </p>
    </section>
  )
}
