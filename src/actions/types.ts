import {Person} from '../reducers/types';

export const ADD_PERSONS = 'ADD_PERSONS';
export const LOAD_PERSONS = 'LOAD_PERSONS';

interface LoadPersonsAction {
  type: typeof LOAD_PERSONS;
}
interface AddPersonsAction {
  type: typeof ADD_PERSONS;
  payload: Person[];
}

export type PersonActionTypes = AddPersonsAction | LoadPersonsAction;
