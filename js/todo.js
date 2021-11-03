const field = document.querySelector('.field');
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.list');

function createTask(value) {
  const task = document.createElement('div');
  task.className = 'task';
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.className = 'task-checkbox';
  task.innerHTML = `<div>${value}</div>`;
  task.insertAdjacentElement('afterbegin', checkBox);
  checkBox.addEventListener('change', completeTask);
  return task;
}

function addTask() {
  const task = createTask(field.value);
  todoList.append(task);
  field.value = '';
}

function completeTask(event) {
  const { target } = event;
  target.nextElementSibling.classList.toggle('task-completed');
}

addBtn.addEventListener('click', addTask);
field.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask(field.value);
  }
});
