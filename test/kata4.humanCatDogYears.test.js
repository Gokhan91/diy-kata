const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns an array of 3 numbers consisting of human cat and dog years", () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(15)).toEqual([15, 76, 89]);

    });
});
