import { currentProject } from "./index.js";

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
const createProject = (parent, currentProject) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("create-project");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    function addProject() {
        const newDiv = document.createElement("div");
        let projectName = input.value;
        newDiv.textContent = projectName;
        parent.appendChild(newDiv);
        newDiv.addEventListener('click', () => {
            currentProject = newDiv.textContent;
            console.log(currentProject)
        });
        cancelProject();
    }
    function cancelProject() {
        newDiv.remove();
    }
    const add = document.createElement("div");
    add.textContent = "Add";
    add.addEventListener('click', addProject);
    const cancel = document.createElement("div");
    cancel.textContent = "Cancel";
    cancel.addEventListener('click', cancelProject);
    newDiv.appendChild(input);
    newDiv.appendChild(add);
    newDiv.appendChild(cancel);
    return { newDiv }
}

export { selectHome,createProject };