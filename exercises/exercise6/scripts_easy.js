// 🎯 Goal: We need to get references to the form, input field, and task list
// What elements in the HTML do we need to interact with?
// Think about what the user types (input field) and where tasks will appear (list).
const taskForm = document.getElementById("__________"); // (Hint: Select the form where the user submits tasks)
const taskInput = document.getElementById("__________"); // (Hint: Select the input field where the user types their task)
const taskList = document.getElementById("__________"); // (Hint: Select the list that will hold all tasks)

// 🎯 Goal: We need to respond when the user submits a task
// How can we listen for a form submission?
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from refreshing the page when submitted

  // 🎯 Goal: Get the text the user entered and clean up any unnecessary spaces
  // How can we retrieve input field data and ensure there are no leading/trailing spaces?
  const taskText = taskInput.value.__________(); // (Hint: Get the text from the input field and trim extra spaces)

  // 🎯 Goal: We should only create a task if the input is not empty
  // What happens if the user submits an empty task? 
  if (taskText !== "") {
    // 🎯 Goal: We need to create a new list item (li) for the task
    // What HTML element should hold our task?
    const li = document.createElement("__________"); // (Hint: Create an <li> element)

    // 🎯 Goal: Display the task inside the list item
    // What property sets the text inside an element?
    li.__________ = taskText; // (Hint: Set the task text inside the list item)

    // �