import { countScore } from "./businessLogic/countScore.js.js.js"
 

let arr = ["SYM1", "SYM1", "SYM1"]
let arr2 = ["SYM1", "SYM1", "SYM3"]
let arr3 = ["SYM1", "SYM2", "SYM3"]

test("should ", () => {
  expect(countScore(arr)).toBe(3)
  expect(countScore(arr2)).toBe(2)
  expect(countScore(arr3)).toBe(0)
})
