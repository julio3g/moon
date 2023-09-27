import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Contact } from '@/components/Contact'
import { Experiences } from '@/components/Experiences'
import { Header } from '@/components/Header'
import { Training } from '@/components/Training'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Experiences />
      <Training />
      {/* <Projects /> */}
      <Contact />
    </>
  )
}
