import { Subtitle } from '../Subtitle'
import { Icon } from './Icon'

import EmailLogo from '@/assets/email.svg'
import GithubLogo from '@/assets/github.svg'
import LinkedInLogo from '@/assets/linkedIn.svg'

export function Contact() {
  return (
    <footer className="pt-8 pb-12 text-center md:pt-16 md:pb-24 md:max-w-5xl mx-auto px-4">
      <Subtitle subtitle="Contato" />
      <div className="flex flex-col gap-4 w-full justify-between md:flex-row">
        <p className="text-sm max-w-[288px] m-auto md:text-left md:text-base md:m-0 md:font-normal">
          Estou disponível para novos projetos no momento. Entre em contato
          comigo e marcamos uma conversa 👋
        </p>
        <nav className="flex gap-3 m-auto md:m-0 md:items-center">
          <Icon icon={<EmailLogo />} url="mailto:juliocesar.orso@gmail.com" />
          <Icon icon={<GithubLogo />} url="https://github.com/julio3g" />
          <Icon
            icon={<LinkedInLogo />}
            url="https://www.linkedin.com/in/julio-cesar-orso"
          />
        </nav>
      </div>
      <b className="text-zinc-600 block text-sm font-normal mt-6 md:mt-8 md:text-sm">
        Alguns direitos reservados.
      </b>
    </footer>
  )
}
