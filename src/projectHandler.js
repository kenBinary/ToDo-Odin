import * as storage from "./localStorage.js";
// Selecting Home Options
function selectHome() {
    let homeOptions = Array.from(document.querySelector(".home-options").children);
    homeOptions.shift();
    homeOptions.forEach(element => {
        element.addEventListener('click', () => {
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