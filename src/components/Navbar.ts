import { GoToButton } from './GOTO'

export const Navbar = () => {
  return `
    <nav
      class='sticky start-0 top-0 z-30 w-full border-b border-gray-100 bg-gray-100 dark:border-gray-600 dark:bg-gray-900'
    >
      <div
        class='mx-auto flex max-w-screen-xl flex-wrap items-center justify-evenly gap-2 p-4 md:justify-between md:gap-0'
      >
        <a
          href='/'
          class='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <span
            class='self-center whitespace-nowrap text-lg font-semibold text-gold-metalic-600 dark:text-gold-500 md:text-2xl'
          >Elite Roofing Solutions</span
          >
        </a>
        <div class='group flex items-center gap-2 md:hidden'>
          <button
            id='dropdown-menu'
            type='button'
            class='ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          >
            <span class='sr-only'>Open sidebar</span>
            <svg class='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
              <path
                clip-rule='evenodd'
                fill-rule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
              ></path>
            </svg>
          </button>
        </div>
        <div
          class='order-1 hidden w-full items-center justify-between md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul
            class='mt-4 flex w-full flex-col gap-2 rounded-lg border border-gray-100 bg-gray-100 p-4 font-medium text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white md:mt-0 md:flex-row md:items-center md:gap-0 md:space-x-8 md:border-0 md:bg-gray-100 md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse'
          >
            <li>
              <a
                href='/#services'
                aria-label='services'
                class='block rounded px-3 py-2 hover:bg-gray-100 dark:hover:text-gold-500 hover:text-gold-metalic-500 dark:border-gray-700 bg-transparent md:p-0 md:hover:bg-transparent'
              >Servicios</a
              >
            </li>
            <li>
              <a
                href='/#projects'
                aria-label='about-us'
                class='block rounded px-3 py-2 hover:bg-gray-100 dark:hover:text-gold-500 hover:text-gold-metalic-500 dark:border-gray-700 bg-transparent md:p-0 md:hover:bg-transparent'
              >Proyectos</a
              >
            </li>
            <li>
              <a
                href='/#contact'
                aria-label='terms-conds'
                class='block rounded px-3 py-2 hover:bg-gray-100 dark:hover:text-gold-500 hover:text-gold-metalic-500 dark:border-gray-700 bg-transparent md:p-0 md:hover:bg-transparent'
              >Contacto</a
              >
            </li>
            <li class='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
              ${GoToButton('Solicitar Cotización', '/#contact-us')}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
}
