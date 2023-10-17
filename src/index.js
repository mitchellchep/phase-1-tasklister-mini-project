document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access the input value entered by the user
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;

    // Create a new task element and add it to the DOM
    const taskList = document.getElementById("tasks");
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  });
});

