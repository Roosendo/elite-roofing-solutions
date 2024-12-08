const STORAGE_THEME_ITEM = 'theme'
const DARK_CLASS = 'dark'
const LIGHT_CLASS = 'light'

const setTheme = () => {
  const triggerLightTheme = document.getElementById('light-theme')
  const triggerDarkTheme = document.getElementById('dark-theme')

  const theme = (() => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(STORAGE_THEME_ITEM)
    ) {
      return localStorage.getItem(STORAGE_THEME_ITEM)
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_CLASS
    }
    return LIGHT_CLASS
  })()

  if (theme === DARK_CLASS) {
    document.documentElement.classList.add(DARK_CLASS)
  } else {
    document.documentElement.classList.remove(DARK_CLASS)
  }

  if (theme) localStorage.setItem(STORAGE_THEME_ITEM, theme)

  triggerLightTheme?.addEventListener('click', () => {
    document.documentElement.classList.remove(DARK_CLASS)
    localStorage.setItem(STORAGE_THEME_ITEM, LIGHT_CLASS)
  })

  triggerDarkTheme?.addEventListener('click', () => {
    document.documentElement.classList.add(DARK_CLASS)
    localStorage.setItem(STORAGE_THEME_ITEM, DARK_CLASS)
  })
}
setTheme()
