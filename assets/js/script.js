// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return crypto.randomUUID()
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const cardTask = $('<div>').addClass('card project-card draggable my-3').attr('data-project-id', task.id);
  const headerCard = $('<div>').addClass('card-header h4').text(task.title);
  const bodyCard = $('<div>').addClass('card-body');
  const descriptionCard = $('<p>').addClass('card-text').text(task.description)
  const dueDateCard = $('<p>').addClass('card-text').text(task.dueDate)
  const deleteCard = $('<button>').addClass('btn btn-danger delete').text('Delete').attr('data-project-id', task.id);
  deleteCard.on('click', handleDeleteTask);

  if (task.dueDate && task.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.dueDate, 'MM/DD/YYYY');

    if (now.isSame(taskDueDate, 'day')) {
      cardTask.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate)) {
      cardTask.addClass('bg-danger text-white');
      deleteCard.addClass('border-light');
    }
  }

  bodyCard.append(descriptionCard, dueDateCard, deleteCard);
  cardTask.append(headerCard, bodyCard);

  return cardTask;
}



// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const todos = $('#todo-cards');
  todos.empty();

  const progressList = $('#in-progress-cards');
  progressList.empty();

  const doneList = $('#done-cards');
  doneList.empty();

  for (let task of tasks) {
    if (task.status === 'to-do') {
      todos.append(createTaskCard(task));
    } else if (task.status === 'in-progress') {
      progressList.append(createTaskCard(task));
    } else if (task.status === 'done') {
      doneList.append(createTaskCard(task));
    }
    }

    $('.draggable').draggable({
      opacity: 0.7,
      zIndex: 100,
     
      helper: function (e) {
        
        const original = $(e.target).hasClass('ui-draggable')
          ? $(e.target)
          : $(e.target).closest('.ui-draggable');
       
        return original.clone().css({
          width: original.outerWidth(),
        });
      },
    });

    }


// Todo: create a function to handle adding a new task
$(document).ready(function () {
  $('#addTask').click(function () {    //document is link with html, function is telling to the button addTask when click
    $('#myModal').modal('show');       //open modal to enter a new task. 
  });

  $('#myModal').on('click', '#taskSubmit', function (event) {    //modal is telling when you click button (addtask)
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
      status: 'to-do',
    }

    console.log(newTask);

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  //recover any existing tasks from local storage, converts them from JSON format into a JavaScript array, 
    tasks.push(newTask);                                          //and then add a new task to this array.

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTaskList(tasks);     //is a function responsible for generating and displaying a list of task un a user interface (webpage,mobile app)
  })
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  //recover any existing tasks from local storage, converts them from JSON format into a JavaScript array, 

  renderTaskList(tasks);
});


// Todo: create a function to handle deleting a task
function handleDeleteTask() {
  const idTask = $(this).attr(data-project-id);
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  console.log(data-project-id);
  
}




// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
