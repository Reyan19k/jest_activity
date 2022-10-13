const {addUp} = require("../problems/problem3")

describe("myFunction", () =>{
    test("should properly add two numbers", () => {
        expect(addUp(1, 2)).toBe(3)
    })
})