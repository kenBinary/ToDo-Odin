import * as storage from "./localStorage.js";
import taskFacilitator from "./addTask.js";
import { disableAddTask, showAddTask } from "./popup.js";
// Selecting Home Options
function selectHome() {
    let homeOptions = Array.from(document.querySelector(".home-options").children);
    homeOptions.shift();
    homeOptions.forEach((element, index, array) => {
        element.addEventListener('click', () => {
            disableAddTask();
            const currentProject = document.querySelector(".project-title");
            currentProject.textContent = element.textContent;
            let tasks = [];
            switch (element.textContent) {
                case "All":
                    tasks = storage.getAllTasks();
                    taskFacilitator.removeAllTasks();
                    tasks.forEach((element) => {
                        taskFacilitator.initializeTasks(element);

                    });
                    break;
                case "Today":
                    taskFacilitator.removeAllTasks();
                    tasks = storage.getTodayTasks();
                    tasks.forEach((element) => {
                        taskFacilitator.initializeTasks(element);
                    });
                    break;
                case "Week":
                    taskFacilitator.removeAllTasks();
                    tasks = storage.getWeekTask();
                    tasks.forEach((element) => {
                        taskFacilitator.initializeTasks(element);
                    });
                    break;
                case "Completed":
                    taskFacilitator.removeAllTasks();
                    tasks = storage.getCompletedTasks();
                    tasks.forEach((element) => {
                        taskFacilitator.initializeTasks(element);
                    });
                    break;
                default:
                    console.log("bruh")
                    break;
            }
        });
    });
}

// creating a project
const createProject = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("create-project");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    const add = document.createElement("div");
    add.textContent = "Add";
    const cancel = document.createElement("div");
    cancel.textContent = "Cancel";
    newDiv.appendChild(input);
    newDiv.appendChild(add);
    newDiv.appendChild(cancel);
    return { newDiv, add, cancel, input }
}
// cancel project
function cancelProject(newProject) {
    newProject.remove();
}
//add project
function addProject(projects, input) {

    // adds project to storage if it already exists in storage
    if (storage.projects.getItem(input)) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("option")
        let projectName = input;
        newDiv.textContent = projectName;
        const removeOption = document.createElement("div")
        removeOption.classList.add("remove-option")
        // listener for when project element is clicked
        let tasks = [];
        newDiv.addEventListener('click', () => {
            showAddTask();
            const currentProject = document.querySelector(".project-title");
            currentProject.textContent = newDiv.textContent;
            tasks = storage.getProjectValues(newDiv.textContent);
            taskFacilitator.removeAllTasks();
            tasks.forEach((element) => {
                taskFacilitator.initializeTasks(element);
            });
        });
        // listener for when remove project element is clicked
        removeOption.addEventListener('click', (event) => {
            event.stopPropagation();
            storage.removeProject(newDiv.textContent);
            taskFacilitator.removeAllTasks();
            newDiv.remove();
            const projectTitle = document.querySelector(".project-title");
            projectTitle.textContent = "All";
        });
        newDiv.appendChild(removeOption);
        projects.appendChild(newDiv);
    }
    else {
        // adds new project not from web storage
        const newDiv = document.createElement("div");
        newDiv.classList.add("option")
        let projectName = input;
        newDiv.textContent = projectName;
        storage.newProject(input);
        const removeOption = document.createElement("div")
        removeOption.classList.add("remove-option")
        let tasks = [];
        newDiv.addEventListener('click', () => {
            showAddTask();
            const currentProject = document.querySelector(".project-title");
            currentProject.textContent = newDiv.textContent;
            tasks = storage.getProjectValues(newDiv.textContent);
            taskFacilitator.removeAllTasks();
            tasks.forEach((element) => {
                taskFacilitator.initializeTasks(element);
            });
        });
        removeOption.addEventListener('click', (event) => {
            event.stopPropagation();
            storage.removeProject(newDiv.textContent);
            taskFacilitator.removeAllTasks();
            newDiv.remove();
            const projectTitle = document.querySelector(".project-title");
            projectTitle.textContent = "All";
        });
        newDiv.appendChild(removeOption);
        projects.appendChild(newDiv);
    }
}

export { selectHome, createProject, addProject, cancelProject };