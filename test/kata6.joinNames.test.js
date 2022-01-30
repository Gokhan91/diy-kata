const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{

      name: 'Bart'

    }, {

      name: 'Lisa'

    }, {

      name: 'Firut'

    }, {

      name: 'Maggie'

    }]

    )).toEqual("Bart, Lisa, Firut & Maggie");
  });
});
