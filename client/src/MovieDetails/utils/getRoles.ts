import { Person } from "../../types/person";

// move to utils function and write tests
export const getRoles = (people: Person[]) => {
  let result: string[] = [];
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    for (let j = 0; j < person.roles.length; j++) {
      const role: string = person.roles[j];
      if (!result.includes(role)) {
        result.push(role);
      }
    }
  }
  return result;
};
