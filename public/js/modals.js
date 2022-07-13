const hotspots = document.querySelectorAll('.hotspot')
const modaleTechnic = document.querySelector('.hotspot__technic')
const triggerTechnic = document.querySelectorAll('.aspects__btn--technic')
const modaleFonct = document.querySelector('.hotspot__fonctionnal')
const triggerFonct = document.querySelectorAll('.aspects__btn--fonctionnal')
const modaleEco = document.querySelector('.hotspot__eco')
const triggerEco = document.querySelectorAll('.aspects__btn--eco')

triggerTechnic.forEach((trigger) =>
  trigger.addEventListener('click', () => {
    modaleTechnic.classList.toggle('visible')
  })
)

triggerFonct.forEach((trigger) =>
  trigger.addEventListener('click', () => {
    modaleFonct.classList.toggle('visible')
  })
)

triggerEco.forEach((trigger) =>
  trigger.addEventListener('click', () => {
    modaleEco.classList.toggle('visible')
  })
)
