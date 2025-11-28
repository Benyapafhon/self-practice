const resetCypressGenericClasses = () => {
  document.querySelectorAll('.ecors-dialog-message').forEach(el => el.classList.remove('ecors-dialog-message'));
  document.querySelectorAll('.ecors-button-dialog').forEach(el => el.classList.remove('ecors-button-dialog'));
};

export const showChangeModal = () => {
  resetCypressGenericClasses(); // Reset all generic classes first
  const changeDialog = document.querySelector('#dogalai4');
  const msg = document.querySelector('#change-msg');
  const okButton = document.querySelector('#ok-butt-change');

  msg.classList.add('ecors-dialog-message'); // Add specific classes
  okButton.classList.add('ecors-button-dialog');

  msg.textContent = 'Declaration updated.';
  changeDialog.style.display = "flex";
  changeDialog.showModal();

  const handleClose = () => {
    changeDialog.style.display = "none";
    changeDialog.close();
    resetCypressGenericClasses(); // Reset all generic classes on close
    okButton.removeEventListener('click', handleClose);
  };

  okButton.addEventListener('click', handleClose);
}
