import { getPeopleNameByRole } from "./getPeopleNameByRole";
import { expect, describe, it } from "@jest/globals";

describe("Get Actors by Role", () => {
  it("gets the names on the repective roles", () => {
    const people = [
      {
        name: "Jon Watts",
        roles: ["Director"],
      },
      {
        name: "Chris McKenna",
        roles: ["Writer"],
      },
      {
        name: "Eric Sommers",
        roles: ["Writer"],
      },
    ];
    const expectedResult = ["Chris McKenna", "Eric Sommers"];

    expect(getPeopleNameByRole("Writer", people)).toEqual(expectedResult);
  });
});
