import { countScore } from "./countScore.js"

export const updateBalance = (symbolsForResult, balanceElement) => {
  let score = countScore(symbolsForResult.slice(-4, -1))
  balanceElement.innerHTML = +balanceElement.innerHTML + score
}
