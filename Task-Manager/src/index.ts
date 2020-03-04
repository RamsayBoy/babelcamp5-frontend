const textbox = <HTMLInputElement>document.querySelector('#task-input');
const taskList = <HTMLUListElement>document.querySelector('.task-list');

textbox.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        // Create task and insert it
        let task = document.createElement('li');
        task = createTask(this.value);

        taskList.appendChild(task);

        // Clean input content
        this.value = '';
    }
});

function createTask(inputValue: string) {
    const li = <HTMLLIElement>document.createElement('li');
    const div = <HTMLDivElement>document.createElement('div');
    const checkbox = <HTMLInputElement>document.createElement('input');
    const label = <HTMLLabelElement>document.createElement('label');
    const icon = '<i class="material-icons">delete_outline</i>';

    // Init checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'task-checkbox');
    checkbox.setAttribute('name', 'task');
    checkbox.setAttribute('maxlength', '30');

    // Init label
    label.textContent = inputValue;

    // Add checkbox and label to div
    div.appendChild(checkbox);
    div.appendChild(label);

    // Add div to li
    li.appendChild(div);

    // Add delete icon
    li.innerHTML += icon;

    return li;
}