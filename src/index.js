import "normalize.css";
import showPopUp from "./popup";

// pop up handler
const newTask = document.querySelector(".new-task");
newTask.addEventListener('click',()=>{
    const popUp = document.querySelector(".add-task");
    showPopUp(popUp);
});

