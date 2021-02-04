const rightMove = document.querySelectorAll('.right.move'); // classes need their . and no space between like in CSS
const leftMove = document.querySelectorAll('.left.move');
const boxes = [...document.getElementsByClassName('box')]


/* Lines 7 through 19 were what I had originally written to make nodes alternate colors */
// const colorize = (character) => {
//   if (character.style.background === 'plum') {
//     return character.style.background = 'rgba(231, 231, 241, 0.92)';
//   }
//   else {
//     return character.style.background = 'plum';
//   }
// }
// charArray.forEach((charName) => {
//   charName.addEventListener('click', () => {
//     colorize(event.target);
//   })
// })


/* classList.toggle toggles the plum class style on and off of the classlist of characters names that get clicked */

const colorize = (event) => {
  event.classList.toggle('plum')
}
/* Lines 28 - 32 listens for any character name that is clicked and then passes the event target (the clicked character name) through the colorize callback */
document.querySelectorAll('.char').forEach(character => {
  character.addEventListener('click', (event) => {
    colorize(event.target);
  })
})

// Notes for redoing the arrow event listeners
// not common to use array methods on DOM nodes
// think of DOM elements
// my method would be useful if I had 50 diff elements in an array, but with this few elements it's no worth it
// 2 things:
// add eventlistener to each arrow separately
// i.e. const rightArrow1 = document.querySelector.id = right1
// instead of getting all boxes and indexing - have a diff variable for each box
// function that takes in a new char and appends the char to the box that's passed into the function
const move = (box) => {

}


document.querySelector('#right1').addEventListener('click', (event) => {
  move(event.target)
})
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


/* The below code is what I'd originally written */
// let rightMovesArray = [...rightMove]
// rightMovesArray.forEach((arrow) => {
//   arrow.addEventListener('click', (event) => {
//     if (event.target.id === "right1") {
//       charArray.forEach(char => {
//         if (char.style.background === 'plum') {
//           char.parentNode.removeChild(char);
//           boxes[1].appendChild(char);
//           colorize(char);
//         }
//       })
//     }
//     else if (event.target.id === "right2") {
//       charArray.forEach(char => {
//         if (char.style.background === 'plum') {
//           char.parentNode.removeChild(char);
//           boxes[2].appendChild(char);
//           colorize(char);
//         }
//       })
//     }
//   })
// })

// let leftMovesArray = [...leftMove];
// leftMovesArray.forEach((arrow) => {
//   arrow.addEventListener('click', (event) => {
//     if (event.target.id === "left2") {
//       charArray.forEach(char => {
//         if (char.style.background === 'plum') {
//           char.parentNode.removeChild(char);
//           boxes[0].appendChild(char);
//           colorize(char);
//         }
//       })
//     }
//     else if (event.target.id === "left3") {
//       charArray.forEach(char => {
//         if (char.style.background === 'plum') {
//           char.parentNode.removeChild(char);
//           boxes[1].appendChild(char);
//           colorize(char);
//         }
//       })
//     }
//   })
// })
