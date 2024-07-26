const accordionItems = document.querySelectorAll('.accordion-item');

for (const item of accordionItems) {
    item.addEventListener('click', () => item.classList.toggle('active'));
}

const targetDate = new Date("November 2, 2024").getTime();

const countdown = document.querySelector('.countdown-timer');
const x = setInterval(() => {
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
}, 1000);