import {Person} from '../reducers';
import {ADD_PERSONS, PersonActionTypes} from './types';

export function addPersons(persons: Person[]): PersonActionTypes {
  return {
    type: ADD_PERSONS,
    payload: persons,
  };
}

export function loadPersons() {
  return async function load(dispatch, getState) {
    if (getState().personList.length > 0) {
      return;
    }

    const response = await fetch('http://example.com/movies.json');
    const data = await response.json();

    if (data.results) {
      const persons = data.results.map(person => ({
        name: person.name,
        gender: person.gender,
        height: person.height,
        mass: person.mass,
        birthYear: person.birth_year,
        hairColor: person.hair_color,
      }));

      dispatch(addPersons(persons));
    }
  };
}
