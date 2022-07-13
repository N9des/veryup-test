// Scoop les différents éléments utiles
const car = document.querySelector('.img__carcara')
const container = document.querySelector('.container')
const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('scroll', () => {
  const scroll = wrapper.scrollTop
  const totalWidth = container.scrollWidth
  const scrollHeight = wrapper.scrollWidth

  // Afin de pouvoir déplacer la voiture dans le viewoprt au scroll, on va effectuer un calcul
  // la position du scroll / (la taille totale du container - la hauteur du scroll)
  // On va ensuite modifier la valeur Left de la position de la voiture avec la valeur calculer dès que l'on scroll.
  const per = scroll / (totalWidth - scrollHeight)

  const carPositionX = per * (container.scrollHeight / 2 - car.offsetWidth)

  car.style.left = carPositionX + '%'
})
