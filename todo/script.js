const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.getElementById('tasks');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function render() {
    tasksList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">DELETE</button>
        `;
        tasksList.appendChild(li);
    });
}

addTaskButton.addEventListener('click', () => {
    const task = newTaskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        render(); 
        newTaskInput.value = ''; 
    }
});
newTaskInput.addEventListener('keypress', (e) => {
    const task = newTaskInput.value.trim();
    if (e.key === 'Enter' && task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        render(); 
        newTaskInput.value = ''; 
    }
});

function deleteTask(index) {
    tasks.splice(index, 1); 
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    render(); 
}


render();
