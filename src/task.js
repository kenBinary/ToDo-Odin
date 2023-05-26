const task = (title, description, date) => {
    let taskObject = {
        "title": title,
        "description": description,
        "date": date,
        "isCompleted": false
    }
    let editTask = (newTitle, newDescription, newdate) => {
        this.taskObject.title = newTitle;
        this.taskObject.description = newDescription;
        this.taskObject.date = newdate;
    }
    let updateStatus = (currentStatus) => {
        if (currentStatus) {
            this.taskObject.isCompleted = false
        }
        else {
            this.taskObject.isCompleted = true;
        }
    }
    return { taskObject, editTask, updateStatus };
};

export default task;

