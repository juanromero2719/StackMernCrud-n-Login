import task from "../models/task.model.js"

const getAlltasks = async (user) => {

    try {

        const tasks = await task.find({
            user: user
        }).populate('user')
        return tasks   
    } catch (error) {
        console.log("error: ", error)
    }

}

const createTask = async (title, description, date, user) => {

    try {

        const newTask = new task({
            title,
            description,
            date,
            user: user
        })

        const savedTask = await newTask.save()
        return savedTask
    } catch (error) {
        console.log("error: ", error)
    }

}

const getTaskById = async (id) => {

    try {
        const foundTask = await task.findById(id)
        return foundTask
    } catch (error) {
        console.log("error: ", error)
    }
}

const deleteTaskById = async (id) => {

    try {

        const foundTask = await task.findByIdAndDelete(id)
        return foundTask
    } catch (error) {
        console.log("error: ", error)
    }
}

const updateTask = async (id, request) => {

    try {

        const foundTask = await task.findByIdAndUpdate(id, request, {new: true})
        return foundTask
    } catch (error) {
        console.log("error: ", error)
    }
}


export default { getAlltasks, createTask, getTaskById, deleteTaskById, updateTask }


