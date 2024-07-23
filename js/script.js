const accordionBtns = document.querySelectorAll('.accordion-button');

for (const btn of accordionBtns) {
    btn.addEventListener('click', () => {
        const accordionContent = btn.nextElementSibling;
        accordionContent.classList.toggle('active');
    });
}