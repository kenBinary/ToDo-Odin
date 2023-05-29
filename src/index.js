import "normalize.css";
import { showPopUp, rervertPopUp, editPopUp } from "./popup";
import taskFacilitator from "./addTask";
import { selectHome } from "./projectHandler";
import { createProject } from "./projectHandler";
// variable to keep track of current project
var currentProject;
// var projects = [];
var projectTasks = [];


// pop up handler
const newTask = document.querySelector(".new-task");
newTask.addEventListener('click', () => {
    const popUp = document.querySelector(".add-task");
    showPopUp(popUp);
});

const closePopUp = document.querySelector(".close-task");
closePopUp.addEventListener('click', () => {
    showPopUp();
    rervertPopUp();
});
// adds a new task
const add = document.querySelector(".add");
function addNewTask() {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    projectTasks.push(taskFacilitator.addTask(title, description, date));
    rervertPopUp();
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
    const newProject = createProject(projects, currentProject);
    projects.appendChild(newProject.newDiv);
});


export { projectTasks, currentProject };
