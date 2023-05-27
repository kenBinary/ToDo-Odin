import task from "./task";
import createTaskElement from "./taskElement";
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
            const newTaskElement = createTaskElement(newTask.taskObject);
            main.appendChild(newTaskElement.container);
        }
    }
    return { addTask }
})();
export default taskFacilitator;