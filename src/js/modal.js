const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.modal-close-btn');

export function showModal() {
  document.body.style.overflow = 'hidden';
  backdrop.classList.add('is-open');
}

function hideModal() {
  document.body.style.overflow = '';
  backdrop.classList.remove('is-open');
}

closeModalBtn.addEventListener('click', hideModal);

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    hideModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});
