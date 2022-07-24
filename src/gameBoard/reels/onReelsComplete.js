import { countScore } from "../businessLogic/countScore.js.js.js"

// Reels done handler.
export function onReelsComplete(running, symbolsForResult) {
  running = false
  let score = countScore(symbolsForResult.slice(-4, -1))
  // console.log(score)
}
