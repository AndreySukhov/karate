const philosophyTabs =  document.querySelectorAll('.js-philosophy__tab-option')

philosophyTabs.forEach((tab) => {
    tab.addEventListener('click',  (e) => {
        document.querySelector('.js-philosophy__img.active').classList.remove('active');
        document.querySelector('.js-philosophy__tab-option.active').classList.remove('active');
        document.querySelector('.js-philosophy__tabs-contents__item.active').classList.remove('active');
        const listId = e.currentTarget.dataset.tab;
        const target = e.currentTarget
        target.classList.add('active');
        document.querySelector(`.js-philosophy__tabs-contents__item[data-tab="${listId}"]`)
            .classList.add('active');
        document.querySelector(`.js-philosophy__img[data-tab="${listId}"]`)
            .classList.add('active');

    })
})

const menuToggleBtn = document.querySelector('.js-header-nav-button')
const menuCloseBtn = document.querySelector('.js-header-close-button')
const menuContainer = document.querySelector('.js-nav-list__wrap');

menuToggleBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    menuContainer.classList.toggle('active');
})

const closeMenu = () => {
    menuToggleBtn.classList.remove('active');
    menuContainer.classList.remove('active');
}
menuCloseBtn.addEventListener('click', (e) => {
    closeMenu()
})

document.querySelector('.js-header-nav-list').querySelectorAll('a')
.forEach((link) => {
    link.addEventListener('click', () => {
        closeMenu();
    })
})