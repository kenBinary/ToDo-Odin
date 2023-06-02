import "normalize.css";
import { showPopUp, rervertPopUp, editPopUp } from "./popup";
import taskFacilitator from "./addTask";
import { selectHome, createProject, addProject, cancelProject } from "./projectHandler";
import * as storage from "./localStorage";

// pop up handler
const newTask = document.querySelector(".new-task");
newTask.addEventListener('click', () => {
    const popUp = document.querySelector(".add-task");
    showPopUp(popUp);
});

const closePopUp = document.querySelector(".close-task");
closePopUp.addEventListener('click', () => {
    showPopUp();
    // rervertPopUp();
});

// ADDS A NEW TASK
const add = document.querySelector(".add");
function addNewTask() {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const currentProject = document.querySelector(".project-title").textContent;
    showPopUp();
    taskFacilitator.addTask(title, description, date, currentProject);
    // rervertPopUp();
}
add.addEventListener('click', (e) => {
    if (e.target.textContent === "Add") {
        addNewTask();
    }
});

selectHome();


// creating new project
const newProject = document.querySelector(".new-project");
let projects = document.querySelector(".projects");

newProject.addEventListener('click', () => {
    const project = createProject();
    project.add.addEventListener('click', () => {
        addProject(projects, project.input.value);
        const currentProject = document.querySelector(".project-title");
        currentProject.textContent = project.input.value;
        taskFacilitator.removeAllTasks();
        cancelProject(project.newDiv)
    });
    project.cancel.addEventListener('click', () => {
        cancelProject(project.newDiv)
    });
    projects.appendChild(project.newDiv);
});


// initializes the data that was previously stored
const initializeData = (() => {
    if (storage.projects.length > 0) {
        let projectList = storage.getAllProjects();
        let alltasks = [];
        projectList.forEach(element => {
            addProject(projects, element)
            let values = storage.getProjectValues(element);
            values.forEach(element => {
                alltasks.push(element);
            });
        })
        alltasks.forEach((element) => {
            taskFacilitator.initializeTasks(element);
        });
    }
})();