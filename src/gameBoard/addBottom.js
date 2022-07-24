import { createPlayButton } from "./playButton.js"

const SYMBOL_SIZE = 128

// Build top & bottom covers and position reelContainer
export const addBottom = (app, startRunningLongSpin) => {
  const margin = app.screen.height - SYMBOL_SIZE * 3
  const bottom = new PIXI.Graphics()
  bottom.beginFill(0, 1)
  bottom.drawRect(0, 396, app.screen.width, margin)
  app.stage.addChild(bottom)
  createPlayButton(app, startRunningLongSpin)
}
