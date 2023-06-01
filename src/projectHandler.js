import * as storage from "./localStorage.js";
import taskFacilitator from "./addTask.js";
import task from "./task.js";
// Selecting Home Options
function resetSelection(options) {
    options.forEach((element) => {
        if (element.classList.contains("selected")) {
            element.classList.toggle("selected");
        }
    });
}
function selectHome() {
    let homeOptions = Array.from(document.querySelector(".home-options").children);
    homeOptions.shift();
    homeOptions.forEach((element, index, array) => {
        element.addEventListener('click', () => {
            const currentProject = document.querySelector(".project-title");
            currentProject.textContent = element.textContent;
            resetSelection(array);
            element.classList.toggle("selected");
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

    // adds project to storage
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
            const currentProject = document.querySelector(".project-title");
            currentProject.textContent = newDiv.textContent;
            tasks = storage.getProjectValues(newDiv.textContent);
            taskFacilitator.removeAllTasks();
            tasks.forEach((element) => {
                taskFacilitator.initializeTasks(element);

            });
            // taskFacilitator.removeAllTasks();
        });
        // listener for when remove project element is clicked
        removeOption.addEventListener('click', (event) => {
            event.stopPropagation();
            const currentProject = document.querySelector(".project-title");
        });
        newDiv.appendChild(removeOption);
        projects.appendChild(newDiv);
    }
    else {
        const newDiv = document.createElement("div");
        newDiv.classList.add("option")
        let projectName = input;
        newDiv.textContent = projectName;
        storage.newProject(input);
        const removeOption = document.createElement("div")
        removeOption.classList.add("remove-option")
        newDiv.addEventListener('click', () => {
            const currentProject = document.querySelector(".project-title");
            currentProject.textContent = newDiv.textContent;
        });
        removeOption.addEventListener('click', (event) => {
            event.stopPropagation();
            const currentProject = document.querySelector(".project-title");
        });
        newDiv.appendChild(removeOption);
        projects.appendChild(newDiv);
    }
}

export { selectHome, createProject, addProject, cancelProject };