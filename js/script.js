const accordionItems = document.querySelectorAll('.accordion-item');

for (const item of accordionItems) {
    item.addEventListener('click', () => {
        const accordionContent = item.querySelector('.accordion-content');
        accordionContent.classList.toggle('active');
    });
}