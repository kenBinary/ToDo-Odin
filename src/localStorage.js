import { startOfYesterday } from "date-fns";

let projects = window.localStorage;

function newProject(projectName) {
    let emptyArray = []
    projects.setItem(projectName, JSON.stringify(emptyArray));
}
function removeProject(projectName) {
    projects.removeItem(projectName);
}
function addTask(projectName, task) {
    let storedTasks = JSON.parse(projects.getItem(projectName));
    storedTasks.push(task);
    projects.setItem(projectName, JSON.stringify(storedTasks));
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
function getAllProjects() {
    let projectKeys = []
    for (var i = 0; i < projects.length; i++) {
        var key = projects.key(i);
        projectKeys.push(key);
    }
    return projectKeys;
}
function getProjectValues(key) {
    let keyValue = JSON.parse(projects.getItem(key));
    return keyValue;
}

export { projects, newProject, removeProject, addTask, getTasks, removeTask, getAllProjects, getProjectValues }