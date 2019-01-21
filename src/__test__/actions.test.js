import { setTasks, updateTask } from '../store/actions/tasks';
import { SET_TASKS } from '../store/constants';
import data from '../data/tasks.json';

describe('testing actions', () => { 
    it('setTasks()', () => {
        expect(setTasks()).toEqual({ type: SET_TASKS, payload: data });
    })
})