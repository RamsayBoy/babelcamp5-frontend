const countBtn = document.querySelector('button');
const countInput = document.querySelector('input');
const countList = document.querySelector('button + ul');

countInput.addEventListener('input', function () {
    let inputValue = countInput.value;

    if (inputValue) {
        countBtn.textContent = inputValue == 1 ? `Contar ${inputValue} segundo` : `Contar ${inputValue} segundos`;
    } else {
        countBtn.textContent = 'Contar';
    }
});

countInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        countBtn.click();
        this.select();
    }
});

countBtn.addEventListener('click', function () {
    let inputValue = countInput.value;

    if (inputValue) {
        let li = document.createElement('li');
        // TODO Add counter and remove 0 value
        li.textContent = `0/${inputValue}`;
        countList.appendChild(li);
    }
});