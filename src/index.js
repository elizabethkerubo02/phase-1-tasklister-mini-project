document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  const prioritySelect = document.getElementById('priority-select');
  
  // Function to add task to list
  function addTask(event) {
    event.preventDefault(); // prevent form from submitting
  
    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value;
  
    // Create new list item
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
  
    // Add priority color class based on selected option
    const priority = prioritySelect.value;
    if (priority === 'high') {
      taskItem.classList.add('priority-high');
    } else if (priority === 'medium') {
      taskItem.classList.add('priority-medium');
    } else if (priority === 'low') {
      taskItem.classList.add('priority-low');
    }
  
    // Create delete button and add to list item
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    taskItem.appendChild(deleteButton);
  
    // Create edit button and add to list item
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', editTask);
    taskItem.appendChild(editButton);
  
    // Add new list item to task list
    taskList.appendChild(taskItem);
  
    // Reset input field
    taskInput.value = '';
  }
  
  // Function to delete task from list
  function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
  }
  
  // Function to edit task in list
  function editTask(event) {
    const taskItem = event.target.parentNode;
    const taskText = taskItem.firstChild.nodeValue;
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = taskText;
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', function() {
      taskItem.firstChild.nodeValue = taskInput.value;
      taskItem.removeChild(taskInput);
      taskItem.removeChild(saveButton);
    });
    taskItem.appendChild(taskInput);
    taskItem.appendChild(saveButton);
  }
  
  // Event listener for form submission
  form.addEventListener('submit', addTask);
  

});
