const {subtract} = require("../problems/problem2")

describe("myFunction", () =>{
    test("should properly add two numbers", () => {
        expect(subtract(3, 1)).toBe(2)
    })
})