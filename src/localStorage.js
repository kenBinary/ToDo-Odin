let projects = window.localStorage;

function newProject(projectName) {
    let emptyArray = []
    let projectName = projectName;
    projects.setItem(projectName, JSON.stringify(emptyArray));
}
function removeProject(projectName) {
    projects.removeItem(projectName);
}
function addTask(projectName, task) {
    let storedTasks = JSON.parse(projects.getItem(projectName));
    storedTasks.push(task);
    projects.setItem(projectName, JSON.parse(storedTasks));
}
function getTasks(projectName) {
    let storedTasks = JSON.parse(projects.getItem(projectName));
    return storedTasks;
}
function removeTask(projectName, identifier) {
    let storedTasks = JSON.parse(projects.getItem(projectName));
    storedTasks.forEach((element, index, array) => {
        if (element.identifier === identifier) {
            array.splice(index, 1);
        }
    });
    return JSON.stringify(storedTasks);
}
