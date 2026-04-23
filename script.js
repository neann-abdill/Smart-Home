const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', ()=> {
    mobileMenu.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

const hideMenu = () => {
    mobileMenu.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
};

closeMenu.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);

function toggleFaq(element) {
    const allItems = document.querySelectorAll('.faq-items');
    const content = element.querySelector('.faq-content');
    const img = element.querySelector('img');
    const openIcon = "/assets/open.svg";
    const closeIcon = "/assets/close.svg";
    const isOpening = ! content.style.maxHeight;

    allItems.forEach(item => {
        const itemContent = item.querySelector('.faq-content');
        const itemImg = item.querySelector('img');
        itemContent.style.maxHeight = null;
        itemImg.src = openIcon
    });

    if (isOpening) {
        content.style.maxHeight = content.scrollHeight + "px";
        img.src = closeIcon;
    }
}