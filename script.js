document.addEventListener("DOMContentLoaded", () => {
  
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  slides.style.width = `${images.length * (images[0].clientWidth + 20)}px`;

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * (images[0].clientWidth + 20)}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });

  window.addEventListener('resize', updateSlide); // para mantener el tamaño correcto
});
