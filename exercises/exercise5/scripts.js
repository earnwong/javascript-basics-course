// 📝 Step 1: Select the form, input field, and task list
// Why? We need to interact with these elements to receive user input and display tasks.
const taskForm = document.getElementById("taskForm"); // (Hint: This is the form element where tasks are added)
const taskInput = document.getElementById("taskInput"); // (Hint: The input field where the user types a task)
const taskList = document.getElementById("taskList"); // (Hint: The list where tasks will be displayed)

// 📝 Step 2: Detect when the user submits the form
// Why? Without listening for the submit event, nothing happens when they click "Add Task".
taskForm.addEventListener("submit", function (event) { // (Hint: What event triggers when a form is submitted?)
  
  // 🛑 Step 3: Prevent the default form submission behavior
  // Why? Normally, submitting a form reloads the page, but we don’t want that.
  event.preventDefault();

  // 🎯 Step 4: Retrieve and clean the user input
  // Why? We need the text, but users might accidentally add extra spaces.
  const taskText = taskInput.value.trim(); // (Hint: Use a method to remove unnecessary spaces)

  // 🔍 Step 5: Validate the input
  // Why? If the user submits an empty task, it shouldn't be added.
  if (taskText !== "") {

    // 🏗 Step 6: Create a new task item
    // Why? Each task needs its own list item to be displayed properly.
    const li = document.createElement("li"); // (Hint: What type of HTML element do we need for list items?)

    // 📌 Step 7: Add the task text to the list item
    // Why? Otherwise, it would be an empty item with no visible text.
    li.textContent = taskText; // (Hint: Which property lets us change the text inside an element?)

    // 📌 Step 8: Attach the new task to the list
    // Why? The list item won’t appear unless we add it to the existing task list.
    taskList.appendChild(li); // (Hint: What method appends a child element to another element?)

    // ✨ Step 9: Clear the input field after adding a task
    // Why? Without this, users would have to manually delete the old text before typing a new task.
    taskInput.value = ""; // (Hint: What property resets an input field?)
  
  } else {
    // 🚨 Step 10: Alert the user if they try to add an empty task
    // Why? To remind them that they need to actually type something before submitting.
    alert("Field empty."); // (Hint: What message should we show to the user?)
  }
});
