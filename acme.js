const rightMove = document.querySelectorAll('.right.move'); // classes need their . and no space between like in CSS
const leftMove = document.querySelectorAll('.left.move');
const boxes = [...document.getElementsByClassName('box')]
// const jerry = document.getElementById('jerry');
// const elaine = document.getElementById('elaine');
// const kramer = document.getElementById('kramer');
// const george = document.getElementById('george');
const characters = document.getElementsByClassName('char');
let charArray = [...characters];
// const firstBox = document.getElementsByClassName('first box');
// const secondBox = document.getElementsByClassName('second box');
// const thirdBox = document.getElementsByClassName('third box');

const colorize = (character) => {
  // console.log(character.style.background )
  if (character.style.background === 'plum') {
    return character.style.background = 'rgba(231, 231, 241, 0.92)';
  }
  else {
    return character.style.background = 'plum';
  }
}

charArray.forEach((charName) => {
  charName.addEventListener('click', () => {
    colorize(event.target);
  })
})


let rightMovesArray = [...rightMove]
rightMovesArray.forEach((arrow) => {
  arrow.addEventListener('click', (event) => {
    if (event.target.id === "right1") {
      charArray.forEach(char => {
        if (char.style.background === 'plum') {
          char.parentNode.removeChild(char);
          boxes[1].appendChild(char);
          colorize(char);
        }
      })
    }
    else if (event.target.id === "right2") {
      charArray.forEach(char => {
        if (char.style.background === 'plum') {
          char.parentNode.removeChild(char);
          boxes[2].appendChild(char);
          colorize(char);
        }
      })
    }
  })
})

let leftMovesArray = [...leftMove];
leftMovesArray.forEach((arrow) => {
  arrow.addEventListener('click', (event) => {
  if (event.target.id === "left2") {
    charArray.forEach(char => {
      if (char.style.background === 'plum') {
        char.parentNode.removeChild(char);
        boxes[0].appendChild(char);
        colorize(char);
      }
    })
  }
  else if (event.target.id === "left3") {
    charArray.forEach(char => {
      if (char.style.background === 'plum') {
        char.parentNode.removeChild(char);
        boxes[1].appendChild(char);
        colorize(char);
      }
    })
  }
})
})
