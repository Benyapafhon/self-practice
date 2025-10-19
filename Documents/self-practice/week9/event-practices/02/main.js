const keyLog = document.getElementById('keyLog')

document.addEventListener('keydown', (event) => {
  let keyPressed = event.key
  let message = `You pressed: ${keyPressed}`
  const pEle = document.createElement('p')

  if (keyPressed === 'Enter') {
    message = 'You pressed: Enter'
    pEle.style.color = 'blue'
  } else keyLog.style.color = 'black'
  pEle.textContent = message
  keyLog.appendChild(pEle)
})
