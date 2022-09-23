const {myFunction} = require("../problems/problem4")

test("should return without first 3 letters", () => {
    const str = "development";
    result = str.substring(3);

expect(result).toBe("elopment");
})