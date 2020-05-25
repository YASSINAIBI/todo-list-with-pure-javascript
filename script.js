/*
    rest
    [1] Use Sweet Alert If Input Is Empty
    [2] cheak if task is exist
    [3] creat delete All Task Button
    [4] creat finish All Task Button
    [5] Add The Tasks To local storage
*/

// variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let allTasks = document.querySelectorAll(".tasks-content .task-box");

// Foucus On Input Field
window.onload = function(){
    theInput.focus();
};

// Adding the task
theAddButton.onclick = function(){

    //If Input is empty
    if(theInput.value === ''){
        Swal.fire(
        'no inpute value to add',
        'don\'t leave the input empty and don\'t add task already existed',
        'warning'
        )
    }
    //if the task alredy exist
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

        // Check if span with no tasks message is exist
        if(document.body.contains(document.querySelector(".no-task-message"))){
            // remove no task message
            noTasksMSG.remove();
        }

        //create span Element
        let mainspan = document.createElement("span");

        //crate delet Button
        let deleteElement = document.createElement("span");

        //Create the span Text
        let text = document.createTextNode(theInput.value);

        //create the delete button text
        let deletText = document.createTextNode("delete");

        // Add text to span
        mainspan.appendChild(text);

        // Add class to span
        mainspan.className = "task-box";

        // Add text To delete Button
        deleteElement.appendChild(deletText);

        // Add class to Delete button
        deleteElement.classList = "delete";

        // add Delete Button To Main span
        mainspan.appendChild(deleteElement);

        // add The Task to the container
        tasksContainer.appendChild(mainspan);

        // Empty the input
        theInput.value = "";

        // focus at field
        theInput.focus();

        // Calculate Tasks
        calculateTasks();
    }
};

document.addEventListener('click', function(e){
    // Delet Task
    if(e.target.className == "delete"){
        // remove current task
        e.target.parentNode.remove();

        // check Number of tasks inside the container
        if(tasksContainer.childElementCount == 0) {
            createNoTasks();
        }
    }
    // Finish Task
    // if(e.target.className == "task-box"){
    //     // Toggle Class 'finished'
    //     e.target.classList.toggle("finished");
    // }

    //Finish Task
    if(e.target.classList.contains("task-box")){
        // Toggle Class 'finished'
        e.target.classList.toggle("finished");
    }
        // Calculate Tasks
        calculateTasks();
});

// function To create no task Message
function createNoTasks() {
    //create Message Span Element
    let msgSpan = document.createElement("span");

    //Create the text message
    let msgText = document.createTextNode("No Tasks To show");

    // add text To message span element
    msgSpan.appendChild(msgText);

    // add class To message span
    msgSpan.className = "no-task-message";

    // Append the message span element to task container
    tasksContainer.appendChild(msgSpan);
}

// function to calculate Tasks
function calculateTasks(){
    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}