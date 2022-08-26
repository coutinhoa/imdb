import { expect, describe, it } from "@jest/globals";
import { getRoles } from "./getRoles";

describe("Get Roles", () => {
  it("gets all people roles", () => {
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
    const expectedResult = ["Director", "Writer"];

    expect(getRoles(people)).toEqual(expectedResult);
  });
});
