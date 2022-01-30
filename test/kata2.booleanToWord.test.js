const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed true, returns no when passed false", () => {
    expect(booleanToWord(true)).toEqual("Yes");
    expect(booleanToWord(false)).toEqual("No");

  });
});
