const humanCatDogYears = number => {
    let dog = ((number - 2) * 5);
    let cat = ((number - 2) * 4);
    let firstYear = 15;
    let secondYear = 24;
    if (number >= 3)
        return [number, cat + secondYear, dog + secondYear]
    if (number === 2)
        return [number, secondYear, secondYear];
    if (number === 1)
        return [number, firstYear, firstYear];
};

module.exports = humanCatDogYears;
