const todoList = 
[{
  name: 'test',
  dueDate: '2024-12-17'
}];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = 
    `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-list" onclick="
        todoList.splice(${i},1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML = todoListHTML + html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
};
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const inputDate = document.querySelector('.js-date-input');
  const dueDate = inputDate.value;
  
  todoList.push({
    name: name,
    dueDate: dueDate
  });
  renderTodoList();
  inputElement.value = '';
};