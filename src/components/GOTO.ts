export const GoToButton = (text: string, route: string) => {
  return `
    <a href="${route}" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gold-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group">
      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gold-500 group-hover:h-full"></span>
      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg class="size-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg class="size-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span class="relative w-full text-left font-semibold transition-colors duration-200 ease-in-out group-hover:text-gray-900">${text}</span>
    </a>
  `
}