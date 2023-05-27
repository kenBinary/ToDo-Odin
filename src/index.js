import "normalize.css";
import { showPopUp,rervertPopUp } from "./popup";
import task from "./task";
import createTaskElement from "./taskElement";
import taskFacilitator from "./addTask";

// variable to keep track of current project
var currentProject;
var projects = [];
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

const add = document.querySelector(".add");
add.addEventListener('click', () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    projectTasks.push(taskFacilitator.addTask(title, description, date));
    rervertPopUp();
});

