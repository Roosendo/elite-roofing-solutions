import './style.css'
import { $ } from './lib'
import { Contact, Hero, Navbar, Projects, Services, Footer } from './components'

const app = $<HTMLDivElement>('#app')
if (app) {
  app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Services()}
    ${Projects()}
    ${Contact()}
    ${Footer()}
  `
}
