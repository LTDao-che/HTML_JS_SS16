let tasks = [
    { id: 1, task: "teacher", salary: 300 },
    { id: 2, task: "laptop", salary: 30 },
    { id: 3, task: "student", salary: 1 }
];
let taskList = document.getElementById('task-list');
let taskForm = document.getElementById('task-form');
for (let i = 0; i < tasks.length; i++) {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `<p>ID: ${tasks[i].id} - ${tasks[i].task} - ${tasks[i].salary}</p>`;
    taskList.appendChild(div);
}
let taskSalary = document.getElementById('pay');
let taskWork = document.getElementById('work');
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = taskWork.value;
    const salary = Number(taskSalary.value);
    if(task.trim()==="" || isNaN(salary)){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }else{
    let id = Date.now();
    const li = document.createElement("li");
    li.className = "eachTask";
    li.innerHTML = `<p>ID: ${id} - ${task} - ${salary}</p>`;
    newTask = { id: id, task: task, salary: salary }
    tasks.push(newTask);
    taskList.appendChild(li);
    taskForm.reset();
    }
});
