const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}


function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo, 
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


// let toDos = [];


// function saveToDos(){
//     localStorage.setItem("todos", JSON.stringify(toDos));
// }


// function buttonClick(event) {
//     const li = event.target.parentElement;
//     li.remove();
// }

// function paintToDo(newTodo){
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.innerText = newTodo;
//     const button = document.createElement("button");
//     button.innerText = "❌";
//     button.addEventListener("click", buttonClick);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit (event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
    
//     toDos.push(newTodo);
//     paintToDo(newTodo);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(a) {
//     console.log("this is the turn of", a);
// }


// const savedToDos = localStorage.getItem("todos");

// if(savedToDos !== null ) {
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos =  parsedToDos;
//     parsedToDos.forEach(paintToDo);
// }
