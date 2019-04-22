import axios from 'axios'
import { GET_TASKS, DELETE_TASK, ADD_TASK, TASKS_LOADING } from "./types."

export const getTasks = () => dispatch => {
    dispatch(setTasksLoading())
    axios.get('/api/v1/tasks')
        .then(res => 
            dispatch({
                type: GET_TASKS,
                payload: res.data
            }))
}

export const deleteTask = id => dispatch => {
    axios.delete(`/api/v1/tasks/${id}`)
        .then(res => dispatch({
            type: DELETE_TASK,
            payload: id
        }))
}

export const addTask = task => dispatch => {
    axios.post('/api/v1/tasks', task)
    .then(res => dispatch({
        type: ADD_TASK,
        payload: res.data
    }))
}

export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    }
}