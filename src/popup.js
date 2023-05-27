
const showPopUp = () => {
    const element = document.querySelector(".add-task");
    let classList = Array.from(element.classList);
    if (classList.includes("hide-popup")) {
        element.classList.remove("hide-popup");
        element.classList.add("show-popup");
    }
    else {
        element.classList.remove("show-popup");
        element.classList.add("hide-popup");
    }
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

export { showPopUp, informationPopUp,rervertPopUp };