import { loadAndStart } from "./src/gameBoard/loader.js"
import { creatingTextures } from "./src/gameBoard/reels/creatingTextures.js"
import { addBottom } from "./src/gameBoard/addBottom.js"
import { animateReel } from "./src/gameBoard/reels/animateReel.js"
import { symbolsUpdate } from "./src/gameBoard/reels/symbolsUpdate.js"
import { buildTheReel } from "./src/gameBoard/reels/buildTheReel.js"
import {
  createLongSpin,
  createShortSpin,
} from "./src/gameBoard/reels/createSpin.js"
import { updateBalance } from "./src/businessLogic/updateBalance.js"
import { hideWinningSymbols } from "./src/businessLogic/winnerSymbols/hideWinningSymbols.js"
import { displayWinnerSymbols } from "./src/businessLogic/winnerSymbols/displayWinnerSymbols.js"
import { disablePlay } from "./src/businessLogic/disablePlayButton.js"

let balance = 100
const spinPrice = 1
const balanceElement = document.getElementById("balance")
balanceElement.innerHTML = balance
const SYMBOL_SIZE = 128

// create pixi app and load asserts
const app = new PIXI.Application({
  width: SYMBOL_SIZE * 5,
  backgroundColor: 0x1099bb,
})
document.body.appendChild(app.view)
loadAndStart(app, createGameBoard)

// after Assets Loaded create pixi board for the slot reel.
function createGameBoard() {
  // Create different slot symbols.
  const slotTextures = creatingTextures()

  // Build the reel
  const reels = buildTheReel(app, slotTextures)

  addBottom(app, startRunningLongSpin)
  let runningLong = false
  let runningShort = false

  // Function to start running the reel.
  function startRunningLongSpin() {
    if (runningLong && runningShort) return
    if (runningLong && !runningShort) return fastStop()
    if (balanceElement.innerHTML < 1) return
    balanceElement.innerHTML -= spinPrice
    runningLong = true
    createLongSpin(reels, tweening, onReelsComplete)
    hideWinningSymbols(app)
  }

  const fastStop = () => {
    runningShort = true
    createShortSpin(reels, tweening, onReelsCompleteFast)
  }

  let symbolsForResult = []

  // Reels done handler.
  function onReelsComplete() {
    runningLong = false
    updateBalance(symbolsForResult, balanceElement)
    console.log(symbolsForResult)
    checkPlayButtonAbility(app)
    displayWinnerSymbols(app, symbolsForResult)
    symbolsForResult.length = 0
  }
  function onReelsCompleteFast() {
    runningLong = false
    runningShort = false
    updateBalance(symbolsForResult, balanceElement)
    checkPlayButtonAbility(app)
    displayWinnerSymbols(app, symbolsForResult)
    symbolsForResult.length = 0
  }

  symbolsUpdate(app, reels, slotTextures, symbolsForResult)
}

const tweening = []

animateReel(app, tweening)

const checkPlayButtonAbility = app => {
  if (balanceElement.innerHTML < spinPrice) {
    disablePlay(app)
  }
}


