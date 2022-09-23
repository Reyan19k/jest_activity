const {longestWord} = require("../problems/problem1");

describe("longestWord", () => {
    test("should return development", () => {
        const testArray = ["i", "dog", "development", "food"];
        expect(longestWord(testArray)).toBe("development")
    })
    test("should return development", () => {
        const testArray = ["i", "dog", "brood", "food"];
        expect(longestWord(testArray)).toHaveLength(5);
    })
})