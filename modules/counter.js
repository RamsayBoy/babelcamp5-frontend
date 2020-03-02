// Elements
export const [input, button, counters] = document.querySelectorAll('input, button, #counters');

// Functions
function count(miliseconds) {   // No lo exporto porque se usa aquí dentro solo
    return new Promise(resolve => setTimeout(resolve, miliseconds))
}

export function addCounter(seconds, countersElement) {
    let c = 0;

    const counter = document.createElement('li');
    counter.textContent = `0/${seconds}`;

    const interval = setInterval(() => {
        c++;
        console.log(`counter: ${c}/${seconds}`)
        counter.textContent = `${c}/${seconds}`;
    }, 1000);
    counters.appendChild(counter);      // Variable global (se pasa como parámetro)

    function stopCounter() {
        clearInterval(interval);
        counter.remove();
    }

    counter.onclick = stopCounter;

    count(seconds * 1000).then(stopCounter);
}
