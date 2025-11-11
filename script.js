


// Referencias al DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Cargar tareas al inicio
document.addEventListener('DOMContentLoaded', loadTasks);

// Añadir tarea
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const task = { text: taskText, completed: false };
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    saveTasksToLocalStorage(tasks);

    renderTasks();
    taskInput.value = '';
}

// Renderizar tareas
function renderTasks() {
    const tasks = getTasksFromLocalStorage();
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.text;
        span.addEventListener('click', () => toggleTask(index));

        const delBtn = document.createElement('button');
        delBtn.textContent = '❌';
        delBtn.addEventListener('click', () => deleteTask(index));

        li.append(span, delBtn);
        taskList.appendChild(li);
    });
}

// Alternar completado
function toggleTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks[index].completed = !tasks[index].completed;
    saveTasksToLocalStorage(tasks);
    renderTasks();
}

// Eliminar tarea
function deleteTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
    renderTasks();
}

// LocalStorage helpers
function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    renderTasks();
}

