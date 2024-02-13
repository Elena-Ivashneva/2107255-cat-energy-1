const page = document.querySelector('.page');
const header = document.querySelector('.header');
const headerToggle = header.querySelector('.header__toggle');

page.classList.remove('no-js');

headerToggle.addEventListener('click', () => {
  header.classList.toggle('is-open')
});
