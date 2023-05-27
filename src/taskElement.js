import information from "../dist/resources/information.png";
import edit from "../dist/resources/edit.png";
import remove from "../dist/resources/remove.png";
const createTaskElement = (taskDetails) => {
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
            console.log("asldfjk")
        });
        container.appendChild(newImage);
    });
    return { container };
}
export default createTaskElement;