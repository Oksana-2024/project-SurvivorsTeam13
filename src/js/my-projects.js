const images = document.querySelectorAll('.li-class-project'); 
const loadMoreButton = document.getElementById('loadMore'); 
const imagesToShow = 3; 
let currentIndex = 3; 

loadMoreButton.addEventListener('click', showImages);

function showImages() {
 
  for (let i = currentIndex; i < currentIndex + imagesToShow && i < images.length; i++) {
    images[i].classList.remove('hidden'); 
  }
  currentIndex += imagesToShow; 
  if (currentIndex >= images.length) {
    loadMoreButton.style.display = 'none';
  }
}

