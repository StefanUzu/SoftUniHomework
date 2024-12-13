function toggle() {

    const contentElement = document.querySelector('#extra');
    const buttonElement = document.querySelector('#accordion .button');

    if (contentElement.style.display === 'block') {
        contentElement.style.display = 'none';
        buttonElement.textContent = 'More';
    } else {
        contentElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    }
}