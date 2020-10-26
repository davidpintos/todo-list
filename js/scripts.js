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
            status: 'in-progress',
        };

        // Agregamos la tarea al array
        tasks.push(task);
        
        showTasksList();

        total.innerHTML = tasks.length;
        taskField.value = '';
    } else {
        alert('Ingrese una tarea!');
    }
}

/**
 * Muestra la lista de tareas: 
 * A - Si una tarea está en estado "removed"
 * no la agrega a la lista.
 * B - Si una tarea está en estado "done", 
 * le pone un estilo diferente para mostrar que está "lista".
 */
const showTasksList = () => {
    const tasksList = document.getElementById('tasks-list');
    let content = '';

    tasks.forEach((task) => {
        let statusText = '';
        let statusClass = '';
        let buttons = '';

        if (task.status === 'done') {
            statusText = '(terminada!)';
            statusClass = 'text-success';
        }

        if (task.status === 'removed') {
            statusText = '(eliminada!)';
            statusClass = 'text-danger';
        } 
        
        if (task.status === 'in-progress') 
        {
            buttons = `<button class="btn btn-success" onclick="markAsDone(${task.id})">Marcar como Terminada</button>
            <button class="btn btn-danger" onclick="remove(${task.id})">Eliminar</button>`;
        }

        content = `${content}
            <li class="pt-3 ${statusClass}">
                ${task.description} ${statusText}
                ${buttons}
            </li>`;
    });

    tasksList.innerHTML = content;
   
}

const markAsDone = (taskId) => {
    tasks.forEach((task) => {
        if (taskId === task.id) {
            task.status = 'done';
        }
    });

    showTasksList();
}

const remove = (taskId) => {

    tasks.forEach((task) => {
        if (taskId === task.id) {
            task.status = 'removed';
        }
    });

    showTasksList();
}
