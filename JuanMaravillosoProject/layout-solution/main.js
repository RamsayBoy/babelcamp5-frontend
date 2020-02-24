// Get elements
const header = document.querySelector('header');
const menuBtn = document.getElementById('icon-open');
const closeBtn = document.getElementById('icon-close');
const links = document.querySelectorAll('nav a');
const main = document.querySelector('main');

const closeElements = [
    main,
    closeBtn,
    ...links
];

// Add event listeners
menuBtn.addEventListener('click', openMenu);

closeElements.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Functions
function openMenu() {
    if(!header.classList.contains('nav-open')) {
        header.classList.add('nav-open');
    }
}

function closeMenu() {
    header.classList.remove('nav-open');
}
