import { taskAxios } from "."

export const createTask = async (task) => {
    const new_task = await taskAxios.post("/", task)
    return new_task
}

export const getTasks = async () => {
    const tasks = await taskAxios.get("/")
    return tasks
}

export const getTask = async (id) => {
    const task = await taskAxios.get(`/${id}`)
    return task
}

export const updateTask = async (id, task) => {
    const updated_task = await taskAxios.put(`/${id}`, task)
    return updated_task
}

export const deleteTask = async (id) => {
    const deleted_task = await taskAxios.delete(`/${id}`)
    return deleted_task
}

