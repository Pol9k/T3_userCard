const tabs = document.querySelectorAll('.header__navigation-link');
const contents = document.querySelectorAll('.logIn');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach((c) => c.classList.remove('active'));
    contents[index].classList.add('active');
  });
});

