import {createStore} from 'redux';
import type {State, Action} from '../Types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        tasks: [...state.tasks, action.payload],
      };
    case 'CHANGE_TODO':
      return {
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
    default:
      return state;
  }
};

const initialState: State = {tasks: []};

export const Store = createStore(reducer, initialState);
