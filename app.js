const board = document.querySelector('#board')
const input = document.querySelector('.color')
const SQUARES_NUMBER = 64 //max 1320

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mousedown', () => {
    setColor(square)
  })

  board.append(square)
}

function setColor(element) {
  element.style.backgroundColor = input.value
}
