import * as modules from './counter.js';

// Events
modules.input.onkeyup = (e) => {
    const seconds = e.target.value;

    modules.button.textContent = seconds ? `Contar ${seconds} segundos` : 'Contar';

    if (e.key === 'Enter') {
        modules.button.click();
    }
}

modules.button.onclick = () => {
    if (modules.input.value) {
        modules.addCounter(modules.input.value, counters);
    }
    modules.input.focus();
    modules.input.select();
}
