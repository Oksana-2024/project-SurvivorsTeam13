const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.modal-close-btn');

export function showModal() {
  document.body.style.overflow = 'hidden';
  backdrop.classList.add('is-open');

  document.addEventListener('keydown', handleKeyDown);
}

function hideModal() {
  document.body.style.overflow = '';
  backdrop.classList.remove('is-open');

  document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    hideModal();
  }
}

closeModalBtn.addEventListener('click', hideModal);

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    hideModal();
  }
});
