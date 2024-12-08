import { ActionButton } from "./ActionButton"

export const Hero = () => {
  return `
    <section class="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <img
        alt="Catedral de San Miguel"
        class="absolute inset-0 w-full h-full bg-cover bg-center object-cover transform transition-transform duration-1000 ease-in-out animate-slow-zoom" 
        src="/catedral-sm.webp"
      />
      <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div class="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 class="text-4xl md:text-6xl text-center max-w-screen-md font-bold mb-4 animate-fade-in-up text-gold-500">Excelencia en techado para hogares de lujo en San Miguel</h1>
        <p class="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Transformamos residencias exclusivas en San Miguel con techos de calidad superior</p>
        ${ActionButton('Agenda una Consulta', '/#contact')}
      </div>
    </section>
  `
}