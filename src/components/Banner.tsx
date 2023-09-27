export function Banner() {
  return (
    <section
      className="h-30h md:h-35h lg:h-90h text-center bg-center bg-cover md:mt-[88px] flex items-center justify-center"
      style={{ backgroundImage: 'url(banner.jpg)' }}
    >
      <div>
        <p className="text-xs font-normal text-zinc-400 md:text-base">
          Bem vindo 👋, Eu sou
        </p>
        <h1 className="font-extrabold text-zinc-200 text-4xl leading-none md:text-6xl">
          Julio Cesar Orso
        </h1>
        <p className="bg-gradient-subtitle bg-clip-text text-transparent text-sm font-bold md:text-xl">
          Designer + Developer Full Stack
        </p>
      </div>
    </section>
  )
}
