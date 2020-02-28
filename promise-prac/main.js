// TODO Refactor
const countBtn = document.querySelector('button');
const countInput = document.querySelector('input');
const countList = document.querySelector('button + ul');

countInput.addEventListener('input', function () {
    let inputValue = countInput.value;
    console.log(inputValue > 0);

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

countBtn.addEventListener('click', function () {
    let seconds = 0;
    let inputValue = countInput.value;

    if (inputValue && inputValue > 0) {
        let li = document.createElement('li');
        li.textContent = `0/${inputValue}`;
        let counter = setInterval(function () {
            li.textContent = `${seconds}/${inputValue}`;
            console.log(`${seconds}/${inputValue}`);
            seconds++;
        }, 1000);

        let stopCounter = new Promise(function (resolve) {
            // TODO See without function
            setTimeout(function () {
                resolve();
            }, 1000 * inputValue);
        });

        stopCounter.then(function () {
            clearInterval(counter);
            li.remove();
        });

        countList.appendChild(li);

        // Event for removing element from list
        li.addEventListener('click', function () {
            li.remove();
        });
    }
});
