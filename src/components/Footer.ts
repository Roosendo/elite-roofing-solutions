export const Footer = () => {
  return `
    <footer class='mt-3 w-full rounded-lg bg-gray-800 shadow'>
      <div class='mx-auto w-full max-w-screen-xl p-3 md:py-8'>
        <div class='sm:flex sm:items-center sm:justify-between'>
          <a
            href='https://www.linkedin.com/in/rosendoo-garcia'
            class='mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse'
          >
            <span
              class='self-center whitespace-nowrap text-2xl font-semibold text-black dark:text-gold-500'
            >Elite Roofing (Rosendo Garcia)</span
            >
          </a>
          <ul
            class='mb-6 flex flex-wrap items-center justify-end text-sm font-medium text-gray-600 dark:text-gray-400 sm:mb-0'
          >
            <li>
              <a
                href='https://twitter.com/rooos_endo'
                target='_blank'
                class='me-4 hover:underline md:me-6'>Twitter</a
              >
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/rosendoo-garcia'
                target='_blank'
                class='me-4 hover:underline md:me-6'>LinkedIn</a
              >
            </li>
            <li>
              <a href='https://github.com/Roosendo' target='_blank' class='me-4 hover:underline md:me-6'
              >GitHub</a
              >
            </li>
          </ul>
        </div>
        <hr class='my-3 border-gray-800 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span class='block text-center text-sm text-gray-600 dark:text-gray-400'
        >Componentes de
          <a href='https://flowbite.com/' target='_blank' class='hover:underline'>Flowbite</a>.</span
        >
        <span class='block text-center text-sm text-gray-600 dark:text-gray-400'
        >Iconos de
          <a href='https://tabler.io/icons' target='_blank' class='hover:underline'>Tabler Icons</a> & <a href='https://heroicons.com/' target='_blank' class='hover:underline'>Heroicons</a
          >.</span
        >
        <span class='block text-center text-sm text-gray-600 dark:text-gray-400'
        >Fuente de
          <a href='https://fontsource.org/' target='_blank' class='hover:underline'>Fontsource</a>.</span
        >
        <span class='block text-center text-sm text-gray-600 dark:text-gray-400'
        >Hecho por mí. Puedes revisar mis redes que estan en este footer.
      </div>
    </footer> 
  `
}
