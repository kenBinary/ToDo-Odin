import task from "./task";
import createTaskElement from "./taskElement";
import { showPopUp } from "./popup";
import * as storage from "./localStorage.js";
const taskFacilitator = (() => {
    const main = document.querySelector(".main");

    function checkInput(title, date) {
        if (!title || !date) {
            alert("Enter Inputs")
            return true;
        }
        else {
            return false;
        }
    }
    const addTask = (title, description, date) => {
        if (!checkInput(title, date)) {
            const newTask = task(title, description, date);
            const newTaskElement = createTaskElement(newTask.taskObject, newTask);
            main.appendChild(newTaskElement.container);
            const currentProject = document.querySelector(".project-title").textContent;
            storage.addTask(currentProject, newTask.taskObject)
            return newTask.taskObject;
        }
    }
    const initializeTasks = (title, description, date) => {
        if (!checkInput(title, date)) {
            const newTask = task(title, description, date);
            const newTaskElement = createTaskElement(newTask.taskObject, newTask);
            main.appendChild(newTaskElement.container);
            const currentProject = document.querySelector(".project-title").textContent;
            return newTask.taskObject;
        }
    }
    return { addTask, initializeTasks }
})();
export default taskFacilitator;