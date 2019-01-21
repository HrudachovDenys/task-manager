import tasks from '../store/reducers/tasks';
import { SET_TASKS } from '../store/constants';

describe('testing reducers', () => {
    it('tasksReducer', () => {
        expect(tasks({}, { type: SET_TASKS, payload: [{ id: '123' }] }))
            .toEqual({ tasks: [{ id: '123' }] });
    });
})