import { defineWinnerPositions } from "./defineWinnerPositions.js"

export const displayWinnerSymbols = (app, symbolsForResult) => {
    let winners = defineWinnerPositions(symbolsForResult)
    const top = app.stage.children.filter(c => c.name === "top")[0]
    const middle = app.stage.children.filter(c => c.name === "middle")[0]
    const bottom = app.stage.children.filter(c => c.name === "bottom")[0]
    top.visible = winners[0]
    middle.visible = winners[1]
    bottom.visible = winners[2]
}

