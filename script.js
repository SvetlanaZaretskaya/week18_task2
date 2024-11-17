const taskList = document.querySelector(`.main-box__tasks`);
const addButton = document.getElementById(`addButton`);
const deleteButton = document.getElementById(`delete`);
const taskInput = document.getElementById(`addTask`);
let notification = document.querySelector(".notification");

// Массив из элементов li
const listItems = document.querySelectorAll('ul li');
const itemsArray = Array.from(listItems);
let valuesArray = itemsArray.map(item => item.textContent);

// Получаем данные из local storage
document.addEventListener('DOMContentLoaded', function(){
    valuesArray = JSON.parse(localStorage.getItem('todoList'));
    valuesArray.forEach(item => {
        const newTask = document.createElement('li');
        newTask.textContent = item;
        taskList.appendChild(newTask);
    });
})


addButton.addEventListener(`click`, function() {
    const taskText = taskInput.value;
    const newTask = document.createElement(`li`);
    newTask.textContent = taskText;
    if (taskText !== "") {
    taskList.append(newTask);
    taskInput.value = "";
    valuesArray.push(taskText);
    localStorage.setItem('todoList', JSON.stringify(valuesArray));  
    }

    
    
function emptyTasklist() {
    if(taskList.children.length !== 0) {
        notification.classList.add('display-none');
        deleteButton.classList.remove('disabled-button');
        deleteButton.disabled = false;
    } 
    else if(taskList.children.length === 0) {
        notification.classList.remove('display-none');
        deleteButton.classList.add('disabled-button');
        deleteButton.disabled = true;
    }
}
emptyTasklist();

})



deleteButton.addEventListener (`click`, function() {
    const lastItem = document.querySelector('ul > li:last-child');
    lastItem.remove();
    taskInput.value = " ";
    let removedElement = valuesArray.pop();
    localStorage.setItem('todoList', JSON.stringify(valuesArray));  

    
function emptyTasklist() {
    if(taskList.children.length !== 0) {
        notification.classList.add('display-none');
        deleteButton.classList.remove('disabled-button');
        deleteButton.disabled = false;
    } 
    else if(taskList.children.length === 0) {
        notification.classList.remove('display-none');
        deleteButton.classList.add('disabled-button');
        deleteButton.disabled = true;
    }
}
emptyTasklist();

})

console.log(valuesArray);

taskList.addEventListener(`click`, function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle(`crossed`);
    }
})


// document.addEventListener('DOMContentLoaded', () => {
//     removeButton();
//    });
   
//    function removeButton() {
//     if(taskList.children.length === 0) {
//         deleteButton.classList.add('disabled-button'); 
//     } else {
//         deleteButton.classList.remove('disabled-button');
//     }
//    }