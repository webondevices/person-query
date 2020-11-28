import {TodoActionTypes, ADD_TODO, DELETE_LAST_TODO} from '../actions/types';
import {TodoState} from './types';

export const initialState: TodoState = {
  todoList: ['filltodos'],
};

export function todoReducer(state = initialState, action: TodoActionTypes) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: [...state.todoList, action.payload],
      };

    case DELETE_LAST_TODO:
      return {
        todoList: state.todoList.slice(0, state.todoList.length - 1),
      };

    default:
      return state;
  }
}

export default todoReducer;
