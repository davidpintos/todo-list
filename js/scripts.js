const checkEnterKey = (ev) => {
    if (ev.keyCode === 13) {
        createTask();
    }
}
// Array de tareas
let tasks = [];

// contador de ids de cada tarea
let ids = 0;

const createTask = () => {
    
    // obtenemos el campo que tiene el nombre de la tarea
    const taskField = document.getElementById('task-name');
    const tasksList = document.getElementById('tasks-list');
    const total = document.getElementById('tasks-total');

    if (taskField.value.trim() !== '') {
        ids++;

        // Construccion del objeto tarea
        const task = {
            id: ids,
            description: taskField.value,
            status: 'in-progress', // 'done'
        };

        // Agregamos la tarea al array
        tasks.push(task);

        tasksList.innerHTML = `${tasksList.innerHTML}
            <li class="pt-3">
                ${task.description}
                <button class="btn btn-success" onclick="markAsDone(${task.id})">Marcar como Terminada</button>
                <button class="btn btn-danger" onclick="remove(${task.id})">Eliminar</button>
            </li>
        `;
        total.innerHTML = tasks.length;
        taskField.value = '';
    } else {
        alert('Ingrese una tarea!');
    }
}

const showTasksList = () => {

}

const markAsDone = (taskId) => {

}

const remove = (taskId) => {
    //console.log(taskId);
}
