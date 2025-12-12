const slides = document.querySelectorAll("#bgSlider .slide-img");
let current = 0;
let intervalTime = 3500;

function showSlide(index) {
   slides.forEach((img, i) => {
     img.style.opacity = i === index ? "1" : "0";
   });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.getElementById("nextSlide").addEventListener("click", nextSlide);
document.getElementById("prevSlide").addEventListener("click", prevSlide);

setInterval(nextSlide, intervalTime);
