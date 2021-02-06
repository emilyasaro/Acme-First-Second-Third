const firstBox = document.querySelector('.first');
const secondBox = document.querySelector('.second');
const thirdBox = document.querySelector('.third');

/* classList.toggle toggles the selected class style (changes background color) on and off of the classlist of character names when they're clicked */
const colorize = (event) => {
  event.classList.toggle('selected');
}
/* Lines 28 - 32 listens for any character name that is clicked and then passes the event target (the clicked character name) through the colorize callback */
document.querySelectorAll('.char').forEach(character => {
  character.addEventListener('click', (event) => {
    colorize(event.target);
  })
})

// move is the callback function I use to move the selected character names
const move = (selected,targetDestination) => {
  targetDestination.appendChild(selected);
  colorize(selected);
}

document.getElementById('right1').addEventListener('click', (event) => {
  Array.from(firstBox.children).forEach((child) => {
    if (child.className.includes('selected')) move(child,secondBox);
  })
})

document.getElementById('right2').addEventListener('click', () => {
  Array.from(secondBox.children).forEach((child) => {
    if (child.className.includes('selected')) move(child,thirdBox)
  })
})

document.getElementById('left2').addEventListener('click', () => {
  Array.from(secondBox.children).forEach((child) => {
    if (child.className.includes('selected')) move(child,firstBox)
  })
})
document.getElementById('left3').addEventListener('click', () => {
  Array.from(thirdBox.children).forEach((child) => {
    if (child.className.includes('selected')) move(child,secondBox)
  })
})


