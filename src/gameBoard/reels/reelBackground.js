export const addReelBackground = app => {
  const texture = PIXI.Texture.from("REEL")
  const background = new PIXI.Sprite(texture)

  background.x = 0
  background.y = 0
  background.zIndex = -1

  app.stage.addChild(background)
}
