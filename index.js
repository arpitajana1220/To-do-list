let todolist = [{name: 'Learn HTML', dueDate: '2024-02-12'}, {name: 'Learn CSS', dueDate: '2024-02-12'}, {name: 'Learn JavaScript', dueDate: '2024-02-12'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todolist.length; i++){

        const todoobject = todolist[i];
        // const name = todoobject.name;
        // const dueDate = todoobject.dueDate;
        const {name, dueDate} = todoobject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class = "delete-todo-button js-delete-button">
                Delete
            </button>      
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button')
    .forEach((button, index) => {
        button.addEventListener('click', () => {
            todolist.splice(index,1)
            renderTodoList(); 
        });
    })
}

document.querySelector('.js-add-button')
    .addEventListener('click', () => addtodo());
function addtodo(){
    const input = document.querySelector('.js-name-input');
    const name = input.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todolist.push({
        name: name,
        dueDate: dueDate});
    
    input.value = '';
    renderTodoList();
}