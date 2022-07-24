export const hideWinningSymbols = (app) => {
    const top = app.stage.children.filter(c => c.name === "top")[0]
    const middle = app.stage.children.filter(c => c.name === "middle")[0]
    const bottom = app.stage.children.filter(c => c.name === "bottom")[0]
    top.visible = false
    middle.visible = false
    bottom.visible = false
}
