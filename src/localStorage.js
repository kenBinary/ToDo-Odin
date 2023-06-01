import * as dateFns from "date-fns";
import task from "./task";
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

function editTask(project, task, identifier) {
    let value = JSON.parse(projects.getItem(project));
    value.forEach((element, index, array) => {
        if (identifier === element.identifier) {
            array.splice(index, 1, task.taskObject)
        }
    })
    let newValue = JSON.stringify(value);
    projects.setItem(project, newValue)
}
function removeTask(project, identifier) {
    let value = JSON.parse(projects.getItem(project));
    value.forEach((element, index, array) => {
        if (identifier === element.identifier) {
            array.splice(index, 1)
        }
    });
    let newValue = JSON.stringify(value);
    projects.setItem(project, newValue)
}
function getTodayTasks() {
    let projects = getAllProjects();
    let today = [];
    projects.forEach((element) => {
        let values = getProjectValues(element);
        values.forEach(element => {
            let date = new Date(element.date);
            if (dateFns.isToday(date)) {
                today.push(element);
            }
        })
    });
    return today;
}
function getWeekTask() {
    let projects = getAllProjects();
    let week = [];
    projects.forEach((element) => {
        let values = getProjectValues(element);
        values.forEach(element => {
            let taskDate = new Date(element.date);
            let currentDate = dateFns.subDays(new Date(), 1);
            let weekFromCurrent = dateFns.add(currentDate, { weeks: 1, days: 1 })
            if (dateFns.isAfter(taskDate, currentDate) && dateFns.isBefore(taskDate, weekFromCurrent)) {
                week.push(element);
            }
        })
    });
    return week;
}
function getCompletedTasks() {
    let projects = getAllProjects();
    let completed = [];
    projects.forEach((element) => {
        let values = getProjectValues(element);
        values.forEach(element => {
            if (element.isCompleted) {
                completed.push(element);
            }
        })
    });
    return completed;
}
function getAllTasks() {
    let projects = getAllProjects();
    let tasks = [];
    projects.forEach((element) => {
        let values = getProjectValues(element)
        tasks.push(...values);
    });
    return tasks;
}

export { projects, getAllTasks, getCompletedTasks, getWeekTask, getTodayTasks, newProject, removeProject, addTask, getTasks, removeTask, getAllProjects, getProjectValues, editTask }