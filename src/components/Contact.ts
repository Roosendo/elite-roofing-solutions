import { ActionButton } from "./ActionButton"
import { Email, MapPin, Phone } from "./icons"

export const Contact = () => {
  return `
    <section id="contact" class="py-20 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form class="space-y-6">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-800 dark:text-gray-200 text-sm rounded-lg focus:ring-gold focus:border-gold block w-full p-2.5" 
                required 
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-800 dark:text-gray-200 text-sm rounded-lg focus:ring-gold focus:border-gold block w-full p-2.5" 
                required 
              />
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Teléfono</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-800 dark:text-gray-200 text-sm rounded-lg focus:ring-gold focus:border-gold block w-full p-2.5" 
                required 
              />
            </div>
            <div>
              <label for="message" class="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Mensaje</label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                class="bg-gray-50 dark:bg-gray-700 border border-gray-300 resize-none text-gray-800 dark:text-gray-200 text-sm rounded-lg focus:ring-gold focus:border-gold block w-full p-2.5" 
                required
              ></textarea>
            </div>
            ${ActionButton('Enviar Mensaje', '', true)}
          </form>
          <div>
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-4">Información de Contacto</h3>
              <div class="space-y-4">
                <p class="flex items-center">${MapPin()} 123 Calle Luxury, San Miguel, El Salvador</p>
                <p class="flex items-center">${Phone()} +503 2222-1234</p>
                <p class="flex items-center">${Email()} info@eliteroofingsanmiguel.com</p>
                <p class="flex items-center">${MapPin()} Sede principal: Asheville, North Carolina, USA</p>
              </div>
            </div>
            <div class="h-64 bg-gray-300 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61825.95369292767!2d-88.19724522089848!3d13.480569699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b2a7a14f8d5c3%3A0x385d67c125f3654!2sSan%20Miguel%2C%20El%20Salvador!5e0!3m2!1sen!2s!4v1653616981675!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>  
  `
}
