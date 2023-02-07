const menuElement = document.querySelector('.menu');
const menuTextElement = document.querySelector('.menu p');
const socialListElement = document.querySelector('.social-list');
const liEls = document.querySelectorAll('.social-list li');

menuElement.addEventListener('click', () => {
    socialListElement.classList.toggle('hide');
    menuElement.classList.toggle('rotate');
});

liEls.forEach((liEl) => {
    liEl.addEventListener('click', () => {
        menuTextElement.innerHTML = liEl.innerHTML;
        socialListElement.classList.add('hide');
        menuElement.classList.toggle('rotate');
    });
})