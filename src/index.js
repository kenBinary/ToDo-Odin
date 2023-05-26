import "normalize.css";
import showPopUp from "./popup";

// variable to keep track of current project
var currentProject;
var projects = [];

// pop up handler
const newTask = document.querySelector(".new-task");
newTask.addEventListener('click',()=>{
    const popUp = document.querySelector(".add-task");
    showPopUp(popUp);
});

