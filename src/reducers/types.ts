export interface Person {
  name: string;
  gender: string;
  birthYear: string;
  height: number;
  mass: number;
  hairColor: string;
}

export interface PersonState {
  personList: Person;
}
