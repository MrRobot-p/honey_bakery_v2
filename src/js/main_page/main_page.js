// АККОРДИОН

document.querySelectorAll('.answers__item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});


// Modal

const modal = document.querySelector('.feedback-modal');
const openModalButtons = document.querySelectorAll('.answers__link');
const overlay = document.querySelector('.overlay');


const openModalButtonClick = (evt) => {
    evt.preventDefault();
    openModal();
}

const addEventListenerOpenButtons = openModalButtons => {
    openModalButtons.forEach(OpenModalButton => {
        OpenModalButton.addEventListener('click', openModalButtonClick);
    });
}
addEventListenerOpenButtons(openModalButtons);

// Для открытия модалки
const openModal = () => {
    modal.classList.add('active');
    overlay.classList.add('active');
    initModalListeners();
};


// Закрытие модалки по клику и кнопке
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove('active');
    removeModalListeners();
};

const onModalCloseKeydownEscape = evt => {
    if (evt.key === "Escape") {
        evt.preventDefault();
        closeModal();
    }
};

const onModalCloseButtonClick = evt => {
    evt.preventDefault();
    closeModal();
};

const onOverlayClick = evt => {
    evt.preventDefault();
    closeModal();
}


const findCloseBtn = () => {
    const modalCloseButton = modal.querySelector('.feedback-modal__close');
    return modalCloseButton;

}

// Инициализаторы и ремуверы слушателей

const initModalListeners = () => {
    findCloseBtn().addEventListener("click", onModalCloseButtonClick);
    document.addEventListener("keydown", onModalCloseKeydownEscape);
    overlay.addEventListener("click", onOverlayClick);
};

const removeModalListeners = () => {
    findCloseBtn().removeEventListener("click", onModalCloseButtonClick);
    document.removeEventListener("keydown", onModalCloseKeydownEscape);
    overlay.removeEventListener("click", onOverlayClick);
};