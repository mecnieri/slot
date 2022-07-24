import { hideWinnerSymbols } from "./businessLogic/winnerSymbols/hideWinnerSymbols.js"
import { displayWinnerSymbols } from "./businessLogic/winnerSymbols/displayWinnerSymbols.js"
import { movingReelTicker } from "./gameBoard/reels/animateReel.js"
import { symbolsUpdateTicker } from "./gameBoard/reels/symbolsUpdate.js"
import {
    createLongSpin,
    createShortSpin,
} from "./gameBoard/reels/createSpin.js"
import { handleBalanceAndBetting } from "./businessLogic/balanceAndBetting/handleBalanceAndBetting.js"

export const gameLogic = (app, reels, symbolTextures) => {
    // there are two kind of spins:
    // on first click starts running long spin 
    // and on second click starts running short spin to end faster
    let runningLongSpin = false
    let runningShortSpin = false
    const tweens = []
    const symbolsForResult = []
    const [isEnoughBalanceForBet, placeBet, updateBalance, checkPlayButtonAbility] = handleBalanceAndBetting(app, symbolsForResult)


    const startRunningLongSpin = () => {
        if (runningLongSpin && runningShortSpin) return
        if (runningLongSpin && !runningShortSpin) return startRunningShortSpin()
        if (!isEnoughBalanceForBet()) return
        runningLongSpin = true
        placeBet()
        hideWinnerSymbols(app)
        createLongSpin(reels, tweens, onReelsComplete)
    }

    const startRunningShortSpin = () => {
        runningShortSpin = true
        createShortSpin(reels, tweens, onReelsCompleteShort)
    }


    // Reels done handlers.
    const onReelsComplete = () => {
        runningLongSpin = false
        updateBalance(symbolsForResult)
        checkPlayButtonAbility(app)
        displayWinnerSymbols(app, symbolsForResult)
        symbolsForResult.length = 0
    }
    const onReelsCompleteShort = () => {
        runningShortSpin = false
        onReelsComplete()
    }

    symbolsUpdateTicker(app, reels, symbolTextures, symbolsForResult)
    movingReelTicker(app, tweens)

    return startRunningLongSpin
}




