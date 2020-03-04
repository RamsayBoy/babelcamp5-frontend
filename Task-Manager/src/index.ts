const textbox = <HTMLInputElement>document.getElementById('task-input');
const taskList = <HTMLUListElement>document.querySelector('.task-list');

textbox.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        // Create task and insert it
        let task = createTask(this.value);
        taskList.innerHTML += task;

        // Clean input content
        this.value = '';
    }
});

/* Create a task by passing an string */
function createTask(inputValue: string) {
    return `<li>
                <label>
                    <input id="task-checkbox" name="task" type="checkbox" maxlength="30">
                    ${inputValue}
                </label>

                <i class="material-icons">delete_outline</i>
            </li>`;
}