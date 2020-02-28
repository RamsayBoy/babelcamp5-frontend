const countBtn = document.querySelector('button');
const countInput = document.querySelector('input');

countInput.addEventListener('input', function() {
    let inputValue = countInput.value;

    if (inputValue) {
        countBtn.textContent = inputValue == 1 ? `Contar ${inputValue} segundo` : `Contar ${inputValue} segundos`;
    } else {
        countBtn.textContent = 'Contar';
    }
});

countInput.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        countBtn.click();
    }
});

countBtn.addEventListener('click', function() {
    console.log('Button pressed');
});