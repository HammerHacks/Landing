const accordionItems = document.querySelectorAll('.accordion-item');
const navItems = document.querySelectorAll('header a');

for (const item of accordionItems) {
    item.addEventListener('click', () => item.classList.toggle('active'));
}

for (const item of navItems) {
    item.addEventListener('click', () => {
        document.querySelector(`.${item.dataset.scrollto}`)?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
    });
}

const NUM_IMAGES = 40;
const carousel = document.querySelector('.image-carousel');
for (let i = NUM_IMAGES; i > 0; i--) {
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('carousel-slide');
  imgDiv.style.display = i === 1 ? "block" : "";

  const img = document.createElement('img');
  img.src = `assets/carousel/${i}.jpg`;
  img.alt = `Image ${i}`;
  img.loading = "lazy";
  imgDiv.appendChild(img);

  carousel.prepend(imgDiv);
}

let slideIndex = 1;

const slides = document.querySelectorAll(".carousel-slide");
let interval;

const plusSlides = n => {
  slides[slideIndex-1].style.display = "";
  showSlides(slideIndex += n);
  clearInterval(interval);
  interval = setInterval(() => plusSlides(1), 5000);
};

const showSlides = n => {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  slides[slideIndex-1].style.display = "block";
};

showSlides(slideIndex);
interval = setInterval(() => plusSlides(1), 5000);

/*
const targetDate = new Date("November 23, 2024").getTime();

const countdown = document.querySelector('.countdown-timer');
let x;
const updateCountdown = () => {
  const todaysDate = Date.now();

  const distance = targetDate - todaysDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    countdown.innerText = "";
  }
};

updateCountdown();
x = setInterval(updateCountdown, 1000);
*/