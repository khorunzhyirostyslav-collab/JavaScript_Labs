let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.textContent = task;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Видалити";

        deleteButton.onclick = function () {

            deleteTask(index);

        };

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });
}

function addTask() {

    const input = document.getElementById("taskInput");

    const task = input.value.trim();

    if (task === "") {

        alert("Введіть справу!");

        return;

    }

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    input.value = "";

    showTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    showTasks();
}

function clearTasks() {

    localStorage.removeItem("tasks");

    tasks = [];

    showTasks();
}

showTasks();

// Додаткове завдання:
// лічильник відвідувань сторінки

let visits = localStorage.getItem("visits");

if (visits === null) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);

document.getElementById("visitCounter").textContent =
    "Кількість відвідувань сторінки: " + visits;