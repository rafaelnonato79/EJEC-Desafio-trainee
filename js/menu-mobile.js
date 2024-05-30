export default function menuMobile() {
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menuList.classList.toggle('ativo');
    }

    function closeMenu() {
        menuButton.setAttribute('aria-expanded', 'false');
        menuList.classList.remove('ativo');
    }

    function outsideClick(event) {
        if (!menuList.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    }

    menuButton.addEventListener('click', toggleMenu);
    document.addEventListener('click', outsideClick);
    window.addEventListener('resize', closeMenu); // Close menu on window resize
});
}