import { SET_TASKS } from '../constants';
import api from '../api';
import data from '../../data/tasks.json';

export const setTasks = () => {
    return { 
        type: SET_TASKS, 
        payload: data 
    };
}

export const updateTask = (tasks, newTask) => dispatch => {
    let i = tasks.findIndex(item => item.id === newTask.id);
    tasks[i] = newTask;
    dispatch({ type: SET_TASKS, payload: tasks });

    api.updateTask(newTask)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}