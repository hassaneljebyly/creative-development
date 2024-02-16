const MENU = document.getElementById('menu');
const NAV = document.getElementById('nav');
const OPEN_BTN = document.getElementById('open-btn');
const CLOSE_BTN = document.getElementById('close-btn');
const NAV_LINKS = document.querySelectorAll('.nav__menu-link');
const NAV_LINKS_MAIN = document.querySelectorAll('.nav__menu-item--main');
const SOCIAL_LINKS = document.querySelectorAll('.nav__menu-link--social');
const INITIAL_DELAY = 150; // ms

let delay = INITIAL_DELAY;

OPEN_BTN.addEventListener('click', () => {
  NAV_LINKS.forEach((link, index) => {
    link.style = `--_transition-delay: ${delay}ms;`;
    index >= NAV_LINKS.length - 1 ? (delay = INITIAL_DELAY) : (delay += 100);
  });
  NAV.classList.toggle('menu-is-open', true);
});
CLOSE_BTN.addEventListener('click', () => {
  NAV.classList.toggle('menu-is-open', false);
  NAV_LINKS.forEach((link) => {
    link.style = ``;
  });
});

/*
  not having a parent container for the main links made hard 
  to do something like this : 
  .parent:hover > div {
    opacity: 0.5;
  }

  .parent:hover > div:hover {
    opacity: 1.0;
  }
  so this I had to overthink it :)
*/

let current;
NAV_LINKS_MAIN.forEach((link) => {
  link.addEventListener('mouseenter', (e) => {
    current = link;
    NAV_LINKS_MAIN.forEach((link) => {
      if (link === current) {
        link.classList.remove('not-hover');
      } else {
        link.classList.add('not-hover');
      }
    });
  });
  link.addEventListener('mouseleave', (e) => {
    console.log('mouse left', link);
    NAV_LINKS_MAIN.forEach((link) => {
      link.classList.remove('not-hover');
    });
  });
});
