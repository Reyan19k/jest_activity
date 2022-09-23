const cloneArray = require("../problems/problem5")

test("should clone the array", () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
})