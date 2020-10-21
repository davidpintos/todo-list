const checkEnterKey = (ev) => {
    if (ev.keyCode === 13) {
        createTask();
    }
}

const createTask = () => {
    // obtenemos el campo que tiene el nombre de la tarea
    const taskField = document.getElementById('task-name');
    const tasksList = document.getElementById('tasks-list');
    
    if (taskField.value.trim() !== "") {
        tasksList.innerHTML = tasksList.innerHTML + '<li>' + taskField.value + '</li>';
    }
}