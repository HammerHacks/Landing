const accordionItems = document.querySelectorAll('.accordion-item');

for (const item of accordionItems) {
    item.addEventListener('click', () => item.classList.toggle('active'));
}

// Set the date we're counting down to
const countDownDate = new Date("November 2, 2024").getTime();

// Update the count down every 1 second
const countdown = document.querySelector('.countdown-timer');
const x = setInterval(() => {
  // Get today's date and time
  const now = Date.now();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  countdown.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    countdown.innerText = "";
  }
}, 1000);