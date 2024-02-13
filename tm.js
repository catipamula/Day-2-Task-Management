function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var taskItem = document.createElement("li");
    taskItem.className = "taskItem";
    taskItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="deleteTask(this)" class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}