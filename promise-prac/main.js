const countBtn = document.querySelector('button');
const countInput = document.querySelector('input');
const countList = document.querySelector('button + ul');

countInput.addEventListener('input', () => {
    let inputValue = countInput.value;

    if (inputValue && inputValue > 0) {
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

countBtn.addEventListener('click', () => {
    let seconds = 0;
    let quantity = countInput.value;

    if (quantity && quantity > 0) {
        let li = document.createElement('li');
        li.textContent = `--/${quantity}`;

        let counter = setInterval(function () {
            li.textContent = `${seconds}/${quantity}`;
            console.log(`${seconds}/${quantity}`);

            seconds++;
        }, 1000);

        let stopCounter = new Promise((resolve) => {
            // TODO See without function
            setTimeout(function () {
                resolve();
            }, 1000 * quantity);
        });

        stopCounter.then(() => {
            clearInterval(counter);
            li.remove();
        });

        countList.appendChild(li);

        // Event for removing element from list
        li.addEventListener('click', () => {
            li.remove();
        });
    }
});
