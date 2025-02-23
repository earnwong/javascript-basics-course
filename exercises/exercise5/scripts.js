// 📝 Step 1: Select the form, input field, and task list
// Why? We need to interact with these elements to receive user input and display tasks.
const taskForm = document.getElementById("__________"); // (Hint: This is the form element where tasks are added)
const taskInput = document.getElementById("__________"); // (Hint: The input field where the user types a task)
const taskList = document.getElementById("__________"); // (Hint: The list where tasks will be displayed)

// 📝 Step 2: Detect when the user submits the form
// Why? Without listening for the submit event, nothing happens when they click "Add Task".
taskForm.addEventListener("__________", function (event) { // (Hint: What event triggers when a form is submitted?)
  
  // 🛑 Step 3: Prevent the default form submission behavior
  // Why? Normally, submitting a form reloads the page, but we don’t w