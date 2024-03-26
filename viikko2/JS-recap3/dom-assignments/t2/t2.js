// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ulElement = document.querySelector('ul');

for (let todo of todoList) {
  // Create the li element
  let liElement = document.createElement('li');

  let inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = `todo-${todo.id}`;
  inputElement.checked = todo.completed;

  let labelElement = document.createElement('label');
  labelElement.htmlFor = inputElement.id;
  labelElement.textContent = todo.task;

  liElement.appendChild(inputElement);
  liElement.appendChild(labelElement);

  ulElement.appendChild(liElement);
}
