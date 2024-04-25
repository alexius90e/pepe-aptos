const burgerButton = document.querySelector('.header__burger-button');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');

if (burgerButton && header && headerNav) {
  burgerButton.addEventListener('click', () => {
    document.body.classList.add('hidden');
    header.classList.add('active');
    headerNav.classList.add('active');
  });

  header.addEventListener('click', (event) => {
    const isHeader = event.target === event.currentTarget;
    const isCloseButton = event.target.classList.contains('header__nav-close');
    const isLink = event.target.classList.contains('header__nav-link');
    if (isHeader || isCloseButton || isLink) {
      document.body.classList.remove('hidden');
      header.classList.remove('active');
      headerNav.classList.remove('active');
    }
  });
}
