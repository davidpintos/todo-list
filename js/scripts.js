const createTask = () => {
    // obtenemos el campo que tiene el nombre de la tarea
    const taskField = document.getElementById('task-name');
    const tasksList = document.getElementById('tasks-list');
    
    tasksList.innerHTML = tasksList.innerHTML + '<li>' + taskField.value + '</li>';
}