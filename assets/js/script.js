// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return crypto.randomUUID()
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const cardTask = $('<div').addClass('card project-card draggable my-3').attr('data-project-id', task.id);

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
$(document).ready(function(){
    $('#addTask').click(function(){    //document is link with html, function is telling to the button addTask when click
    $('#myModal').modal('show');       //open modal to enter a new task. 
    });    

    $('#myModal').on('click', '#taskSubmit', function(event){    //modal is telling when you click button (addtask)
      event.preventDefault();                                    //function(event) is typically passed to event handler when occurs (click,submit, or keypress)  
                                                                 //will prevent the form from being submitted in the usual way, effectively preventing the browser from navigating to a new page.
    const taskTitle = $('#task-title').val();
    const taskDueDate = $('#task-due-date').val();
    const taskDescription = $('#task-description').val();      //# The value is assigned to the variable, val()-method it recover the value of the selected element.

      
      const newTask = {
        id: crypto.randomUUID(),     //creates a new task object with various properties such as ID, 
        title: taskTitle,            //title,due-date,description, and status, initializing them with values obtained from variables.
        dueDate: taskDueDate,
        description: taskDescription,
        status:'to-do',
    }

   console.log(newTask);

   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  //recover any existing tasks from local storage, converts them from JSON format into a JavaScript array, 
   tasks.push(newTask);                                          //and then add a new task to this array.

   localStorage.setItem('tasks', JSON.stringify(tasks));

   renderTaskList();     //is a function responsible for generating and displaying a list of task un a user interface (webpage,mobile app)
    })
  });
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
