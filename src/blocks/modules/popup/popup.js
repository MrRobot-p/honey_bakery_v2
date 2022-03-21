// МОДАЛЬНОЕ ОКНО 

const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.js-catalog__item');
const overlay = document.querySelector('.overlay');


const openPopupButtonClick = (evt) => {
    evt.preventDefault();
    openPopup();
}

const addEventListenerOpenButtons = openPopupButtons => {
    openPopupButtons.forEach(OpenPopupButton => {
        OpenPopupButton.addEventListener('click', openPopupButtonClick);
    });
}
addEventListenerOpenButtons(openPopupButtons);

// Для открытия модалки
const openPopup = () => {
    popup.classList.add('active');
    overlay.classList.add('active');
    initPopupListeners();
};


// Закрытие модалки по клику и кнопке
const closePopup = () => {
    popup.classList.remove("active");
    overlay.classList.remove('active');
    removePopupListeners();
};

const onPopupCloseKeydownEscape = evt => {
    if (evt.key === "Escape") {
        evt.preventDefault();
        closePopup();
    }
};

const onPopupCloseButtonClick = evt => {
    evt.preventDefault();
    closePopup();
};

const onOverlayClick = evt => {
    evt.preventDefault();
    closePopup();
}


const findCloseBtn = () => {
    const popupCloseButton = popup.querySelector('.popup__close');
    return popupCloseButton;

}

// Инициализаторы и ремуверы слушателей

const initPopupListeners = () => {
    findCloseBtn().addEventListener("click", onPopupCloseButtonClick);
    document.addEventListener("keydown", onPopupCloseKeydownEscape);
    overlay.addEventListener("click", onOverlayClick);
};

const removePopupListeners = () => {
    findCloseBtn().removeEventListener("click", onPopupCloseButtonClick);
    document.removeEventListener("keydown", onPopupCloseKeydownEscape);
    overlay.removeEventListener("click", onOverlayClick);
};