export const borderWinnerSymbols = app => {
  const top = createBorder(6, "top")
  app.stage.addChild(top)

  const middle = createBorder(6 + 128, "middle")
  app.stage.addChild(middle)

  const bottom = createBorder(6 + 128 * 2, "bottom")
  app.stage.addChild(bottom)
}

const createBorder = (y, name) => {
  const texture = PIXI.Texture.from("WIN_BG")
  const sprite = new PIXI.Sprite(texture)
  sprite.x = 6
  sprite.y = y
  sprite.visible = false
  sprite.name = name
  return sprite
}
