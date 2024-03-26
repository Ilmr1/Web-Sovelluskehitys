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

function renderTodoList() {
  ulElement.innerHTML = '';

  for (let item of todoList) {
    const liElement = document.createElement('li');

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = item.completed;
    checkboxElement.addEventListener('change', () => {
      item.completed = checkboxElement.checked;
      console.log(todoList);
    });

    const labelElement = document.createElement('label');
    labelElement.textContent = item.task;

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', () => {

      const index = todoList.indexOf(item);
      todoList.splice(index, 1);

      renderTodoList();

      console.log(todoList);
    });

    liElement.appendChild(checkboxElement);
    liElement.appendChild(labelElement);
    liElement.appendChild(deleteButtonElement);

    ulElement.appendChild(liElement);
  }
}

renderTodoList();

const addButtonElement = document.querySelector('.add-btn');

addButtonElement.addEventListener('click', () => {

  const taskName = prompt('Enter the task name:');

  todoList.push({
    id: todoList.length + 1,
    task: taskName,
    completed: false,
  });

  renderTodoList();

  console.log(todoList);
});
