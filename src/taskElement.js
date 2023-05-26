const taskElement = (taskDetails) => {
    const container = document.createElement("div");
    container.classList.add("task");
    const elementActions = ["../dist/resources/information.png", "../dist/resources/edit.png", "../dist/resources/remove.png"];
    for(let key in taskDetails){
        if (key=="isCompleted") {
            break;
        }
        else{
        const newDiv = document.createElement("div");
        newDiv.classList.add(key);
        newDiv.textContent = taskDetails[key];
        container.appendChild(newDiv);
        }
    }
    elementActions.forEach(element => {
        const newImage = document.createElement("img");
        newImage.src = element;
        container.appendChild(newImage);
    });
    const taskInfo = ()=>{

    };
    const editTask = ()=>{

    };
    const removeTask = ()=>{

    }
    return {container,taskInfo,editTask,removeTask};
}
export default taskElement;