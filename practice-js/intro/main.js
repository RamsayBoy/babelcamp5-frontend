const para = document.querySelector('p');

// Function callback (there are no parenthesis)
para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}