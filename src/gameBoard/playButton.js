export const createPlayButton = (app, startRunning) => {
  const playTexture = PIXI.Texture.from("PLAY")
  const button = new PIXI.Sprite(playTexture)

  button.x = Math.round((app.view.width - button.width) / 2)
  button.y = 400
  button.name = "playBTN"
  app.stage.addChild(button)
  button.interactive = true
  button.buttonMode = true
  button.addListener("pointerdown", () => {
    startRunning()
  })
}
