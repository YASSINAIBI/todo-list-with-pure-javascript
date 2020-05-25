/*
    rest
    [1] Use Sweet Alert If Input Is Empty
    [2] cheak if task is exist
    [3] creat delete All Task Button
    [4] creat finish All Task Button
    [5] Add The Tasks To local storage
*/

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let allTasks = document.querySelectorAll(".tasks-content .task-box");

window.onload = function(){
    theInput.focus();
};

theAddButton.onclick = function(){

    if(theInput.value === ''){
        Swal.fire(
        'no inpute value to add',
        'don\'t leave the input empty and don\'t add task already existed',
        'warning'
        )
    }

    else if(document.body.innerText.indexOf(theInput.value) > -1){
        console.log("existing");
        theInput.value = "";
        Swal.fire(
            'inpute string is already existe',
            'please enter new string and must be greater than on character',
            'warning'
            )
    }

    else{

        let noTasksMSG = document.querySelector(".no-task-message");

        if(document.body.contains(document.querySelector(".no-task-message"))){

            noTasksMSG.remove();
        }

        let mainspan = document.createElement("span");

        let deleteElement = document.createElement("span");

        let text = document.createTextNode(theInput.value);

        let deletText = document.createTextNode("delete");

        mainspan.appendChild(text);

        mainspan.className = "task-box";

        deleteElement.appendChild(deletText);

        deleteElement.classList = "delete";

        mainspan.appendChild(deleteElement);

        tasksContainer.appendChild(mainspan);

        theInput.value = "";

        theInput.focus();

        calculateTasks();
    }
};

document.addEventListener('click', function(e){

    if(e.target.className == "delete"){

        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0) {
            createNoTasks();
        }
    }

    if(e.target.classList.contains("task-box")){

        e.target.classList.toggle("finished");
    }

        calculateTasks();
});

function createNoTasks() {

    let msgSpan = document.createElement("span");

    let msgText = document.createTextNode("No Tasks To show");

    msgSpan.appendChild(msgText);

    msgSpan.className = "no-task-message";

    tasksContainer.appendChild(msgSpan);
}

function calculateTasks(){

    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}
