import {initialState, personReducer} from './personReducer';
import {addPersons, loadPersons} from '../actions';

it('inits with default state', () => {
  const action = <any>{};
  const nextState = personReducer(undefined, action);

  expect(nextState).toEqual({
    personList: [],
  });
});

// it('handles ADD_PERSONS action', () => {
//   const state = initialState;
//   const value = ['value'];
//   const action = addPersons(value);

//   const nextState = todoReducer(state, action);

//   expect(nextState).toEqual({
//     personList: ['filltodos', value],
//   });
// });

// it('handles DELETE_LAST_TODO action', () => {
//   const state = initialState;
//   const action = deleteLastTodo();

//   const nextState = todoReducer(state, action);

//   expect(nextState).toEqual({
//     personList: [],
//   });
// });
