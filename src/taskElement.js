import information from "../dist/resources/information.png";
import edit from "../dist/resources/edit.png";
import remove from "../dist/resources/remove.png";
import { informationPopUp, rervertPopUp, showPopUp } from "./popup.js";
const createTaskElement = (taskDetails) => {
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
    const elementOperations = [information, edit, remove];
    elementOperations.forEach(element => {
        const newImage = new Image();
        newImage.src = element;
        newImage.addEventListener('click', () => {
            informationPopUp(myDetails);
            showPopUp();
        });
        container.appendChild(newImage);
    });
    const updateStatus = () => {
        container.addEventListener('click', (e) => {
            let parent = e.target;
            if (parent.classList.contains("task")) {
            }
        });
    }
    return { container };
}
export default createTaskElement;