export const disablePlay = app => {
    const btn = app.stage.children.filter(c => c.name === "playBTN")[0]
    const texture = PIXI.Texture.from("PLAY_DISABLED")
    btn.texture = texture
    btn.interactive = false
    btn.buttonMode = false
}