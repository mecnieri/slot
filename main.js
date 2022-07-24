import { loadAndStart } from "./src/gameBoard/loader.js"
import { creatingTextures } from "./src/gameBoard/reels/creatingTextures.js"
import { addBottom } from "./src/gameBoard/addBottom.js"
import { buildTheReel } from "./src/gameBoard/reels/buildTheReel.js"
import { gameLogic } from './src/GameLogic.js'


const app = new PIXI.Application({
  width: 600,
  backgroundColor: 0x1099bb,
})
document.body.appendChild(app.view)

loadAndStart(app, createGameBoard)

function createGameBoard() {
  const symbolTextures = creatingTextures()
  const reel = buildTheReel(app, symbolTextures)
  const startRunningLongSpin = gameLogic(app, reel, symbolTextures)
  addBottom(app, startRunningLongSpin)
}

