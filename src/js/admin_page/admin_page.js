    /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */

    function zero_first_format(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function currentTime() {
        var current_datetime = new Date();

        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return +hours + ":" + minutes;
    }


    function currentDate() {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth() + 1);
        var year = current_datetime.getFullYear();

        return day + "." + month + "." + year;
    }
    setInterval(function() {
        document.getElementById('panel-time').innerHTML = currentTime();
        document.getElementById('panel-date').innerHTML = currentDate();
        document.getElementById('messages-time').innerHTML = currentTime();
        document.getElementById('messages-date').innerHTML = currentDate();
        document.getElementById('orders-time').innerHTML = currentTime();
        document.getElementById('orders-date').innerHTML = currentDate();
    }, 1000);

    // Modal

    const modal = document.querySelector('.add-admin-modal');
    const openModalButtons = document.querySelectorAll('.js-add-admin');
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
        const modalCloseButton = modal.querySelector('.add-admin-modal__close');
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