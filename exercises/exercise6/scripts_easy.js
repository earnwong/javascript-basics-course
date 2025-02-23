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

    // 🎯 Goal: Allow users to mark a task as "Complete"
    // How can we create an interactive button?
    const completeButton = _____________________("button");
    completeButton.__________ = "Complete"; // (Hint: Set the button text to "Complete")

    // 🎯 Goal: When the user clicks the Complete button, we want to mark the task as done
    // How can we visually indicate a completed task?
    completeButton.addEventListener("click", function () {
      li.__________("completed"); // (Hint: Add a class to change the task's style)
    });

    // 🎯 Goal: Allow users to remove a task from the list
    // What happens when they don’t need a task anymore?
    const deleteButton = ________________________("button");
    deleteButton.__________ = "Delete"; // (Hint: Set the button text to "Delete")

    // 🎯 Goal: Clicking the Delete button should remove the task from the list
    // How do we remove an element from its parent?
    deleteButton.addEventListener("click", function () {
      taskList.__________(li); // (Hint: Remove the list item from the task list)
    });

    // 🎯 Goal: Buttons should be grouped together for better UI
    // How can we organize multiple buttons inside a task?
    const taskActions = document.createElement(___);
    taskActions.className = "task-actions"; // (Hint: This div will contain both buttons)

    // 🎯 Goal: Attach the buttons to our taskActions div
    taskActions.appendChild(__________); // (Hint: Append the complete button)
    taskActions.appendChild(__________); // (Hint: Append the delete button)

    // 🎯 Goal: Attach taskActions to the list item (so buttons stay with each task)
    li.appendChild(__________); // (Hint: Append the taskActions div to the list item)

    // 🎯 Goal: Now we need to add our fully built task to the task list
    taskList.__________(li); // (Hint: Append the new task to the list)

    // 🎯 Goal: Clear the input field after adding a task
    // What should we do so the user doesn’t have to delete old input manually?
    taskInput.__________ = ""; // (Hint: Reset the input field to an empty string)
  } else {
    alert(___________); // Alert the user if they try to submit an empty task
  }
});
