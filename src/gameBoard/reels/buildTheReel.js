import { addReelBackground } from "./reelBackground.js"
import { SYMBOLS_INDEXES } from "./reelContent.js"
import { borderWinnerSymbols } from "./winnerSymbols.js"

// const REEL_WIDTH = 160
const SYMBOL_SIZE = 128

export const buildTheReel = (app, symbolTextures) => {
  let reels = []
  const reelContainer = new PIXI.Container()
  const rc = new PIXI.Container()
  rc.x = 6 
  rc.y = 6
  reelContainer.addChild(rc)

  addReelBackground(app)
  borderWinnerSymbols(app)

  const reel = {
    container: rc,
    symbols: [],
    position: 0,
    previousPosition: 0,
    blur: new PIXI.filters.BlurFilter(),
  }
  reel.blur.blurX = 0
  reel.blur.blurY = 0
  rc.filters = [reel.blur]

  // Build the symbols
  for (let j = 0; j < 4; j++) {
    console.log(symbolTextures[SYMBOLS_INDEXES[j]].textureCacheIds[0])
    const symbol = new PIXI.Sprite(symbolTextures[SYMBOLS_INDEXES[3 - j]])

    // Scale the symbol to fit symbol area.
    symbol.y = j * SYMBOL_SIZE
    symbol.scale.x = symbol.scale.y = Math.min(
      SYMBOL_SIZE / symbol.width,
      SYMBOL_SIZE / symbol.height,
    )
    symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2)
    reel.symbols.push(symbol)
    rc.addChild(symbol)
  }
  reels.push(reel)
  app.stage.addChild(reelContainer)
  return reels
}
