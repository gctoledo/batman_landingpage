document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const buttonTarget = button.target.dataset.tabButton;
            const content = document.querySelector(`[data-tab-id = ${buttonTarget}]`);

            hiddenSection();
            content.style.display = 'block';
            underlineNav(button);
        }) 
    }
    
});

function hiddenSection() {
    const sections = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
}

function underlineNav(button) {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const parent = button.target.parentNode;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].parentNode.classList.remove('header__menu__items__item--active');
    }
    parent.classList.add('header__menu__items__item--active');
}

