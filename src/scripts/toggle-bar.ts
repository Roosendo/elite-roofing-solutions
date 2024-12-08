import { $ } from '../lib'

const navbar = $('#navbar-sticky')
let isSideBarOpen = false

const animateSidebar = () => {
  if (navbar) {
    navbar.classList.toggle('hidden', isSideBarOpen)
    navbar.classList.toggle('flex', !isSideBarOpen)
    navbar.classList.toggle('animate-slide-in-top', !isSideBarOpen)
    navbar.classList.toggle('order-1', !isSideBarOpen)
    isSideBarOpen = !isSideBarOpen
  }
}

const navbarButton = $('#dropdown-menu')

if (navbarButton) {
  navbarButton.addEventListener('click', animateSidebar)
}