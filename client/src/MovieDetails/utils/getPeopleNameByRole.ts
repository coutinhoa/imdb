import { Person } from "../../types/person";

export const getPeopleNameByRole = (
  role: string,
  people: Person[]
): string[] => {
  //console.log(people);
  return people
    .filter((element) => {
      return element.roles.includes(role);
      //console.log(element.roles.includes(role);)
    })
    .map((i) => i.name);
};
