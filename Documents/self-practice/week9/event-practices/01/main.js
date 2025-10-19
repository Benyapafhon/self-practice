const createBtn = document.getElementById('submit')
createBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const allInputEles = document.querySelectorAll('input')
  const isValidInput = Array.from(allInputEles).every(
    (inputEle) => inputEle.value.trim().length !== 0
  )
  const pEle = document.querySelector('p')
  if (isValidInput) {
    pEle.textContent = 'your data completed'
    pEle.style.color = 'green'
  } else {
    pEle.textContent = 'missing some values, please try again!'
    pEle.style = 'color:red'
  }

  const password = document.getElementById('password').value.trim()
  const confirmPassword = document
    .getElementById('confirm-password')
    .value.trim()
  if (password !== confirmPassword) {
    pEle.setAttribute('style', 'color:red')
    pEle.textContent = 'password and confirm do not match, check again'
  }
})
