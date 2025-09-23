// Slider manual con click/touch (opcional)
const slides = document.querySelector('.slides');
let index = 0;

function nextSlide() {
  index = (index + 1) % 3; // Cambia según cantidad de imágenes
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000);
