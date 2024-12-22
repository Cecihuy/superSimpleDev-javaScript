const todoList = 
[{
  name: 'test',
  dueDate: '2024-12-17'
}];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  
  todoList.forEach((todoObject, index)=>{
    const { name, dueDate } = todoObject;
    const html =
        `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="js-delete-list">Delete</button>
        `;
    todoListHTML = todoListHTML + html;
  });
  /*
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
  */
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-list').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
};
document.querySelector('.js-add-todo').addEventListener('click', ()=>{
  addTodo();
});

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