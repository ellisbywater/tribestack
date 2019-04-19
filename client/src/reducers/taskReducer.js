import uuid from "uuid"
import { GET_TASKS, ADD_TASK, DELETE_TASK } from "../actions/types.";

const initialState = {
    tasks: [
        { id: uuid(), name: 'Task 1'},
        { id: uuid(), name: 'Task 2'},
        { id: uuid(), name: 'Task 3'},
        { id: uuid(), name: 'Task 4'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}