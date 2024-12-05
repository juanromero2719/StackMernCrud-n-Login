import taskService from '../service/task.service.js'

export const getTasks = async (request, response) => {

    const user = request.user.id
    const tasks = await taskService.getAlltasks(user)
    response.json(tasks)
}

export const createTask = async (request, response) => {
    
    const { title, description, date } = request.body
    const user = request.user.id

    const savedTask = await taskService.createTask(title, description, date, user)
    response.json(savedTask)
}

export const getTask = async (request, response) => {
    
    const task = await taskService.getTaskById(request.params.id)
    if(!task) return response.status(404).json({ message: "task not found "})
    response.json(task)
}

export const deleteTask = async (request, response) => {

    const task = await taskService.deleteTaskById(request.params.id)
    if(!task) return response.status(404).json({ message: "task not found "})
    return response.sendStatus(204);
}

export const updateTask = async (request, response) => {

    const task = await taskService.updateTask(request.params.id, request.body)
    if(!task) return response.status(404).json({ message: "task not found "})
    response.json(task)
}
