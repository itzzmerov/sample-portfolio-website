const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const header = document.getElementById('main-header');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

function toggleDropdownMenu() {
    const toggleBtnVisibility = window.getComputedStyle(toggleBtn).display;

    if (toggleBtnVisibility === 'none') {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
        header.style.backgroundColor = 'var(--color-dark-blue)';
    } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = 'transparent';
    }
});

window.addEventListener('resize', function() {
  toggleDropdownMenu();
});

toggleDropdownMenu();