import information from "../dist/resources/information.png";
import edit from "../dist/resources/edit.png";
import remove from "../dist/resources/remove.png";
import { informationPopUp, rervertPopUp, editPopUp, showPopUp, getPopUpDetails } from "./popup.js";
import * as storage from "./localStorage.js";
const createTaskElement = (taskDetails, taskObject) => {
    const myTaskObject = taskObject;
    const myDetails = taskDetails;
    const container = document.createElement("div");
    container.classList.add("task");
    container.classList.add("unchecked");
    let counter = 0;

    for (let key in taskDetails) {
        if (counter === 3) {
            break;
        }
        else {
            const newDiv = document.createElement("div");
            newDiv.classList.add(key);
            newDiv.textContent = taskDetails[key];
            container.appendChild(newDiv);
            counter = counter + 1;
        }
    }
    // task operations
    const elementOperations = [information, edit, remove];
    let opCounter = 0;
    elementOperations.forEach(element => {
        const newImage = new Image();
        newImage.src = element;
        if (opCounter === 0) {
            newImage.addEventListener('click', () => {
                informationPopUp(myDetails);
                showPopUp();
            });
        }
        else if (opCounter === 1) {
            newImage.addEventListener('click', () => {
                showPopUp();
                const editButton = editPopUp();
                let details = getPopUpDetails();

                let elements = Array.from(container.childNodes);
                details[0].value = elements[0].textContent;
                details[1].value = elements[1].textContent;
                details[2].value = elements[2].textContent;
                editButton.addTask.addEventListener('click', (event) => {
                    event.stopPropagation()
                    editTask(details[0].value, details[1].value, details[2].value);
                    showPopUp();
                    rervertPopUp();
                }, { once: true });
            });
        }
        else if (opCounter === 2) {
            newImage.addEventListener('click', () => {
                // projectTasks.forEach((element, index, Array) => {
                //     if (element.identifier === myDetails.identifier) {
                //         container.remove();
                //         Array.splice(index, 1);
                //     }
                // });
                console.log("bruh")
            });
        }
        opCounter++;
        container.appendChild(newImage);
    });
    //update task status
    container.addEventListener('click', (e) => {
        let parent = e.target;
        if (parent.classList.contains("task")) {
            updateStatus();
        }
    });
    const updateStatus = () => {
        myDetails.isCompleted = myDetails.isCompleted ? false : true;
        if (myDetails.isCompleted) {
            container.classList.remove("unchecked");
            container.classList.add("checked");
        }
        else {
            container.classList.remove("checked");
            container.classList.add("unchecked");
        }
    }
    // edit the task
    const editTask = (title, description, date) => {
        const currentProject = document.querySelector(".project-title").textContent;
        let previousIdentifier = myTaskObject.taskObject.identifier;

        myTaskObject.editTask(title, description, date);
        storage.editTask(currentProject, myTaskObject, previousIdentifier);



        let elements = Array.from(container.childNodes);
        elements[0].textContent = title;
        elements[1].textContent = description;
        elements[2].textContent = date;
    }
    return { container, myDetails, container };
}
export default createTaskElement;