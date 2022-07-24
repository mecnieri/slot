import { disablePlay } from "../disablePlayButton.js"
import { countScore } from "../countScore.js"

export const handleBalanceAndBetting = (app, symbolsForResult) => {
    let balance = 1
    const spinPrice = 1
    const balanceElement = document.getElementById("balance")
    balanceElement.innerHTML = balance

    const isEnoughBalanceForBet = () => balanceElement.innerHTML >= spinPrice
    
    const placeBet = () => balanceElement.innerHTML -= spinPrice

    const checkPlayButtonAbility = () => {
        if (balanceElement.innerHTML < spinPrice) {
            disablePlay(app)
        }
    }
    const updateBalance = () => {
        let score = countScore(symbolsForResult.slice(-4, -1))
        balanceElement.innerHTML = +balanceElement.innerHTML + score
    }
    return [isEnoughBalanceForBet, placeBet, updateBalance, checkPlayButtonAbility]
}