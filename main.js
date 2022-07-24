import { loadAndStart } from "./src/gameBoard/loader.js"
import { creatingTextures } from "./src/gameBoard/reels/creatingTextures.js"
import { addBottom } from "./src/gameBoard/addBottom.js"
import { buildTheReel } from "./src/gameBoard/reels/buildTheReel.js"
import { gameLogic } from './src/GameLogic.js'


// create pixi app and load asserts
const app = new PIXI.Application({
  width: 600,
  backgroundColor: 0x1099bb,
})

document.body.appendChild(app.view)
loadAndStart(app, createGameBoard)

// after Assets Loaded create pixi board for the slot reel.
function createGameBoard() {

  // Create different slot symbol textures.
  const symbolTextures = creatingTextures()

  // Build the reel
  const reel = buildTheReel(app, symbolTextures)

  // create game logic closure
  const startRunningLongSpin = gameLogic(app, reel, symbolTextures)
  
  // Build bottom of the game board
  addBottom(app, startRunningLongSpin)

}

