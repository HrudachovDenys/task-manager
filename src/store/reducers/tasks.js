import { SET_TASKS } from '../constants';

const INITIAL_STATE = {
    tasks: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
}