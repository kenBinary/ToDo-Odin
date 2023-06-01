function showPopUp() {
    const element = document.querySelector(".add-task");
    element.classList.toggle('hide-popup');
    element.classList.toggle('show-popup');
}
const informationPopUp = (taskDetails) => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const date = document.querySelector("#date");
    const addTask = document.querySelector(".add");
    title.setAttribute("readonly", "");
    description.setAttribute("readonly", "");
    date.setAttribute("readonly", "");
    title.value = taskDetails.title;
    description.value = taskDetails.description;
    date.value = taskDetails.date;
    addTask.classList.add("invisible");
}
const editPopUp = () => {
    const addTask = document.querySelector(".add");
    addTask.textContent = "Edit";
    return { addTask };
}
const getPopUpDetails = () => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const date = document.querySelector("#date");
    let details = [title, description, date];
    return details;
}
const rervertPopUp = () => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const date = document.querySelector("#date");
    title.removeAttribute("readonly");
    description.removeAttribute("readonly");
    date.removeAttribute("readonly");
    title.value = '';
    description.value = '';
    date.value = '';
    const addTask = document.querySelector(".add");
    addTask.classList.remove("invisible");
    addTask.textContent = "Add";
}
function disableAddTask() {
    const newTaskButton = document.querySelector(".new-task");
    newTaskButton.classList.add("invisible");
}
function showAddTask() {
    const newTaskButton = document.querySelector(".new-task");
    newTaskButton.classList.remove("invisible");
}

export { showAddTask, disableAddTask, showPopUp, informationPopUp, rervertPopUp, editPopUp, getPopUpDetails };