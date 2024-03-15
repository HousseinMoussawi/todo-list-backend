const todo_input = document.getElementById('todo-input');
const todo_submit = document.getElementById('todo-submit');
const todos= document.getElementById('todos');
const cancelButton = document.getElementById("cancel-button");
const createButton = document.getElementById("create-button");
const descriptionInput = document.getElementById("description-input")
const addPopup = document.getElementById("add-popup");

const loadtasksInList = (container) => {
    container.innerHTML = "";

    taskList.forEach((task) => {
        container.innerHTML += generateTaskCard(task);       
})

const taskCards = document.querySelectorAll('.todo-card');

taskCards.forEach((card) => {
    card.addEventListener('click', () => {
        const selected = card.getAttribute('task-id');

        localStorage.setItem('selectedCard', selected);

        const task = getTask(parseInt(selected));

        const {id, description, status} = task;

        descriptionInput.value = description

        addPopup.classList.remove("hidden");

        })
    })
};

const generateTaskCard = (task) => {
    const{id, description, status} = task;


}