import { Home, Shield, Leaf, Tool, Sun, Wind } from './icons'

const services = [
  {
    icon: Home,
    title: 'Techado de Tejas',
    description: 'Techos de tejas premium que combinan durabilidad y estética para hogares de lujo.'
  },
  {
    icon: Shield,
    title: 'Techado de Metal',
    description: 'Soluciones de techado en metal de alta gama para una protección duradera y elegante.'
  },
  {
    icon: Leaf,
    title: 'Techado Ecológico',
    description: 'Opciones sostenibles y lujosas para propietarios conscientes del medio ambiente.'
  },
  {
    icon: Tool,
    title: 'Reparaciones',
    description: 'Servicios de reparación expertos para mantener la integridad de su techo.'
  },
  {
    icon: Sun,
    title: 'Techos Solares',
    description: 'Integración de paneles solares para un hogar eficiente y moderno.'
  },
  {
    icon: Wind,
    title: 'Ventilación',
    description: 'Sistemas de ventilación avanzados para optimizar el rendimiento de su techo.'
  }
]

export const Services = () => {
  return `
    <section id="services" class="py-20 bg-gray-100 dark:bg-gray-600">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Nuestros Servicios Premium</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${services.map((service) => `
              <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg animate-scroll transition-transform duration-300 hover:scale-105">
                <div class="mb-4 text-gold flex font-bold text-gold-600 justify-center">${service.icon()}</div>
                <h3 class="text-xl font-bold mb-2 text-gold-700 text-center">${service.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">${service.description}</p>
              </div>
            `).join('')}
        </div>
      </div>
    </section>
  `
}