export const ActionButton = (text: string, url: string, submit = false) => {
  return `
    <a href="${url}" ${submit ? 'type="submit"' : ''} class="relative inline-block text-lg group">
      <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gold-800 transition-colors duration-300 ease-out border-2 border-gold-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gold-50"></span>
        <span class="absolute left-0 w-56 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gold-900 group-hover:-rotate-180 ease"></span>
        <span class="relative">${text}</span>
      </span>
      <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gold-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
  `
}