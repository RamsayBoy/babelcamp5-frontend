const textbox = <HTMLInputElement>document.getElementById('task-input');
const taskList = <HTMLUListElement>document.querySelector('.task-list');

textbox.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        // Create task and insert it
        let task = document.createElement('li');
        task.innerHTML = createTask(this.value);

        taskList.appendChild(task);

        // Clean input content
        this.value = '';
    }
});

function createTask(inputValue: string) {
    return `<div>
                <input id="task-checkbox" name="task" type="checkbox" maxlength="30">
                <label>${inputValue}</label>
            </div>

            <i class="material-icons">delete_outline</i>`;
}