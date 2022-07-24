import { updateBalance } from "./businessLogic/updateBalance.js"
import { hideWinningSymbols } from "./businessLogic/winnerSymbols/hideWinningSymbols.js"
import { displayWinnerSymbols } from "./businessLogic/winnerSymbols/displayWinnerSymbols.js"
import { disablePlay } from "./businessLogic/disablePlayButton.js"
import { movingReelTicker } from "./gameBoard/reels/animateReel.js"
import { symbolsUpdateTicker } from "./gameBoard/reels/symbolsUpdate.js"
import {
    createLongSpin,
    createShortSpin,
} from "./gameBoard/reels/createSpin.js"


let balance = 100
const spinPrice = 1
const balanceElement = document.getElementById("balance")
balanceElement.innerHTML = balance

export const gameLogic = (app, reels, symbolTextures) => {
    // there are two kind of spins:
    // on first click starts running long spin 
    // and on second click starts running short spin to end faster
    let runningLongSpin = false
    let runningShortSpin = false
    const tweens = []
    const symbolsForResult = []

    function startRunningLongSpin() {
        if (runningLongSpin && runningShortSpin) return
        if (runningLongSpin && !runningShortSpin) return startRunningShortSpin()
        if (balanceElement.innerHTML < 1) return
        balanceElement.innerHTML -= spinPrice
        runningLongSpin = true
        hideWinningSymbols(app)
        createLongSpin(reels, tweens, onReelsComplete)
    }

    function startRunningShortSpin() {
        runningShortSpin = true
        createShortSpin(reels, tweens, onReelsCompleteShort)
    }


    // Reels done handler.
    function onReelsComplete() {
        runningLongSpin = false
        updateBalance(symbolsForResult, balanceElement)
        checkPlayButtonAbility(app)
        displayWinnerSymbols(app, symbolsForResult)
        symbolsForResult.length = 0
    }
    function onReelsCompleteShort() {
        runningShortSpin = false
        onReelsComplete()
    }

    symbolsUpdateTicker(app, reels, symbolTextures, symbolsForResult)
    movingReelTicker(app, tweens)


    return startRunningLongSpin
}





const checkPlayButtonAbility = app => {
    if (balanceElement.innerHTML < spinPrice) {
        disablePlay(app)
    }
}