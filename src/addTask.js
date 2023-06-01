import task from "./task";
import createTaskElement from "./taskElement";
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
    const addTask = (title, description, date, currentProject) => {
        if (!checkInput(title, date)) {
            const newTask = task(title, description, date);
            const newTaskElement = createTaskElement(newTask.taskObject, newTask);
            main.appendChild(newTaskElement.container);
            storage.addTask(currentProject, newTask.taskObject)
        }
    }
    const initializeTasks = (taskObject) => {
        // const newTask = task(title, description, date);
        const newTask = task(taskObject.title, taskObject.description, taskObject.date);
        newTask.taskObject.isCompleted = taskObject.isCompleted;
        const newTaskElement = createTaskElement(newTask.taskObject, newTask);
        main.appendChild(newTaskElement.container);
        return newTask.taskObject;
    }
    // removes tasks from main content
    const removeAllTasks = () => {
        const main = document.querySelectorAll(".task");
        for (let child of main) {
            child.remove()
        }
    }
    return { addTask, initializeTasks, removeAllTasks }
})();
export default taskFacilitator;