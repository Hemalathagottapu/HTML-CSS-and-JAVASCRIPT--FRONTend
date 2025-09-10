const taskInput=document.getElementById("task-input")
const addTaskBtn=document.getElementById("add-task")
const todoList=document.getElementById("todos-list")
const itemsLeft=document.getElementById("items-left")
const clearCompletedBtn=document.getElementById("clear-completed");
const emptyState=document.querySelector(".empty-state")
const dateElement=document.getElementById("date");
const filters=document.querySelectorAll(".filter")
let todos=[];
let currentFilter="all";
addTaskBtn.addEventListener("click",()=>{
    addTodo(taskInput.value);
})
taskInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        addTodo(taskInput.value)
    }
})
clearCompletedBtn.addEventListener("click",clearCompleted)
function clearCompleted(){

}
function addTodo(text){
    if(text.trim()==="") return;


    const todo={
        id:Date.now(),text,
        completed:false
    }
    todos.push(todo)
    saveTodos();
    renderTodos();
    taskInput.value="";
}
function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
    updateItemsCount();
    checkEmptySate();
}
function updateItemsCount(){
    const unCompletedTodos=todos.filter(todo=>!todo.completed);
    itemsLeft.textContent=`${unCompletedTodos.length}
        item${unCompletedTodos.length!==1?"S"+"":""}left
    `;
}
function checkEmptySate(){
    const filteredTodos=filterTodos(currentFilter);
    if(filteredTodos.length===0){
        emptyState.classList.remove("hidden");
    }
    else{
        emptyState.classList.add("hidden");
    }

}
function filterTodos(curerntFilter){
    switch(curerntFilter){
        case "active":
            return todos.filter(todo=>!todo.completed);
        case "completed":
            return todos.filter(todo=>todo.completed);
        default:
            return todos;
    }
}

function renderTodos(){
    todoList.innerHTML="";
    const filteredTodos=filterTodos(currentFilter);
    filteredTodos.forEach(todo=>{
        const todoItem=document.createElement("li");
        todoItem.classList.add("todo-item");
        if(todo.completed){
            todoItem.classList.add("completed")
        }
        const checkboxContainer=document.createElement("label")
        checkboxContainer.classList.add("checkbox-container");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.classList.add("todo-checkbox")
        checkbox.checked=todo.completed;
        checkbox.addEventListener("change",()=>toggleTodo(todo.id));
        const checkmark=document.createElement("span");
        checkmark.classList.add("checkmark");
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkmark);

        const todoText=document.createElement("span")
        todoText.classList.add("todo-item-text")
        todoText.textContent=todo.text;

        const deleteBtn=document.createElement("button")
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML='<i class="bi bi-x"></i>';

        deleteBtn.addEventListener("click",()=>deleteTodo(todo.id));
        const todoItemContainer=document.createElement("div");
        todoItemContainer.classList.add("todo-item-container");
        todoItemContainer.appendChild(todoText);
        todoItemContainer.appendChild(deleteBtn);
        todoItem.appendChild(checkboxContainer);
        todoItem.appendChild(todoItemContainer);
        // todoItem.appendChild(todoText)
        // todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

    })

}
function deleteTodo(id){
    todos=todos.filter(todo=>todo.id!=id)
    {
        saveTodos();
        renderTodos();
    }

}
function clearCompleted(){
    todos=todos.filter(todo=>!todo.completed);
    saveTodos();
    renderTodos();
}
function toggleTodo(id){
    todos=todos.map(todo=>{
        if(todo.id===id){
            return {...todo,completed:!todo.completed}
        }
        return todo;
    })
    saveTodos();
    renderTodos();
}
function loadTodos(){
    const storedTodos=localStorage.getItem("todos");
    if(storedTodos){
        todos=JSON.parse(storedTodos)
        renderTodos();
    }
}
filters.forEach(filter=>{
    filter.addEventListener("click",()=>{
        setActiveFilter(filter.getAttribute("data-filter"))
    })
})
function setActiveFilter(filter){
    const currentFilter=filter;
    filters.forEach(item=>{
        if(item.getAttribute("data-filter")===filter){
            item.classList.add("active")
        }
        else{
            item.classList.remove("active")
        }
    })
    renderTodos();
}
function setdate(){
    const options={weekday:"long",month:"short",day:"numeric"}
    const today=new Date()
    dateElement.textContent=today.toLocaleDateString("en-US",options)
}


window.addEventListener("DOMContentLoaded",()=>{
    loadTodos();
    updateItemsCount();
    setdate();
})

const activeClassSection2=document.getElementById("active-class2");
const activeClassSection1=document.getElementById("active-class1");
const activeClassSection3=document.getElementById("active-class3");
activeClassSection2.addEventListener("click",()=>{
     hidecontent2(todoList)
    
})
activeClassSection1.addEventListener("click",()=>{hidecontent1(todoList)})
function hidecontent2(element){
    if(element.style.visibility!=='hidden'){
        element.style.visibility = "hidden";
    }
    
}
function hidecontent1(element){
    if(element.style.visibility==='hidden'){
        element.style.visibility=="visibile";
    }
}