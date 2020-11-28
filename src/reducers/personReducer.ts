import {PersonActionTypes, ADD_PERSONS} from '../actions/types';
import {PersonState} from './types';

export const initialState: PersonState = {
  personList: [],
};

export function personReducer(state = initialState, action: PersonActionTypes) {
  switch (action.type) {
    case ADD_PERSONS:
      return {
        personList: [...state.personList, action.payload],
      };

    default:
      return state;
  }
}

export default personReducer;
