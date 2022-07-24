// loadAndStart function gets 2 arguments
// app - Pixi application
// createGameBoard - function which is executed after every asset is loaded

export const loadAndStart = (app, createGameBoard) => {
  app.loader
    .add("SYM01", "src/assets/SYM01.png")
    .add("SYM02", "src/assets/SYM02.png")
    .add("SYM03", "src/assets/SYM03.png")
    .add("SYM04", "src/assets/SYM04.png")
    .add("SYM05", "src/assets/SYM05.png")
    .add("SYM06", "src/assets/SYM06.png")
    .add("PLAY", "src/assets/PLAY.png")
    .add("PLAY_DISABLED", "src/assets/PLAY_DISABLED.png")
    .add("REEL", "src/assets/REEL.png")
    .add("WIN_BG", "src/assets/WIN_BG.png")
    .load(createGameBoard)
}
