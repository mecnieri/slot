// Build top & bottom covers and position reelContainer
const SYMBOL_SIZE = 128

export const addBottom = (app, startRunning) => {
  // const margin = app.screen.height - SYMBOL_SIZE * 3

  // const bottom = new PIXI.Graphics()
  // bottom.beginFill(0, 1)
  // bottom.drawRect(0, SYMBOL_SIZE * 3, app.screen.width, margin)
  // bottom.drawRect(0, 450, app.screen.width, margin)

  // Add play text
  // const playText = new PIXI.Text("Spin the reel!", style)
  // playText.x = Math.round((bottom.width - playText.width) / 2)
  // playText.y = app.screen.height - Math.round(margin - playText.height)
  // bottom.addChild(playText)

  const playTexture = PIXI.Texture.from("PLAY")
  const button = new PIXI.Sprite(playTexture)

  button.y = SYMBOL_SIZE * 3
  app.stage.addChild(button)

  // Set the interactivity.
  button.interactive = true
  button.buttonMode = true
  button.addListener("pointerdown", () => {
    startRunning()
  })
}

const style = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fontStyle: "italic",
  fontWeight: "bold",
  fill: ["#ffffff", "#00ff99"], // gradient
  stroke: "#4a1850",
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
})
