const images = document.querySelectorAll('.lightbox-img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');

const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');
const closeBtn = document.querySelector('.lightbox-close');

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImage.src = images[currentIndex].src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImage.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
}

/* Click image */
images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

/* Buttons */
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

/* Keyboard navigation */
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeLightbox();
  }
});

/* Click outside image closes */
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
