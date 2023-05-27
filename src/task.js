const task = (title, description, date) => {

    let taskObject = {
        "title": title,
        "description": description,
        "date": date,
        "identifier": title + description,
        "isCompleted": false
    }
    let editTask = (newTitle, newDescription, newdate) => {
        taskObject.title = newTitle;
        taskObject.description = newDescription;
        taskObject.date = newdate;
        taskObject.identifier = newTitle + newDescription;
    }
    let updateStatus = (currentStatus) => {
        if (currentStatus) {
            taskObject.isCompleted = false
        }
        else {
            taskObject.isCompleted = true;
        }
    }
    return { taskObject, editTask, updateStatus };
};

export default task;

