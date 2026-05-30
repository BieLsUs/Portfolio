let clickAcordeon = document.querySelectorAll('.acordeon .btnCard');

clickAcordeon.forEach((acionar) => {
    acionar.addEventListener('click', () => {
        const acordeon = acionar.parentElement;
        const isOpen = acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    })
})
