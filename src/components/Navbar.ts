import { GoToButton } from './GOTO'

export const Navbar = () => {
  return `
    <nav class="bg-gray-100 border-gray-300 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gold-500">Elite Roofing Solutions</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        ${GoToButton('Solicitar Cotización', '/#contact')}
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="size-5" aria-hidden="true"  fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-gold-500 md:dark:text-gold-400" aria-current="page">Inicio</a>
          </li>
          <li>
            <a href="/#services" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gold-500 md:dark:hover:text-gold-500 dark:text-gray-100 dark:hover:bg-gold-500 dark:hover:text-gold-500 md:dark:hover:bg-transparent dark:border-gray-700">Servicios</a>
          </li>
          <li>
            <a href="/#projects" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gold-500 md:dark:hover:text-gold-500 dark:text-gray-100 dark:hover:bg-gold-500 dark:hover:text-gold-500 md:dark:hover:bg-transparent dark:border-gray-700">Proyectos</a>
          </li>
          <li>
            <a href="#contact" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gold-500 md:dark:hover:text-gold-500 dark:text-gray-100 dark:hover:bg-gold-500 dark:hover:text-gold-500 md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  `
}