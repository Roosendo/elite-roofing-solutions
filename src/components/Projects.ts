import { ActionButton } from "./ActionButton"

const projects = [
  {
    image: '/project1.webp',
    title: 'Residencia Colonial en Centro Histórico',
    description: 'Restauración de techo para una mansión colonial en el corazón de San Miguel.'
  },
  {
    image: '/project2.webp',
    title: 'Villa Moderna en Colonia Escalón',
    description: 'Instalación de techo de metal de alta gama para una villa contemporánea.'
  },
  {
    image: '/project3.webp',
    title: 'Eco-Casa en Santa Elena',
    description: 'Techo verde sostenible para una residencia de lujo en zona exclusiva.'
  }
]

export const Projects = () => {
  return `
    <section id="projects" class="py-20 bg-gray-100 dark:bg-gray-600">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Proyectos Recientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          ${projects.map((project) => `
            <div class="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img src="${project.image}" alt="${project.title}" width="400" height="300" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gold-800 mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-12">
          ${ActionButton('Ver más proyectos', '')}
        </div>
      </div>
    </section>  
  `
}
