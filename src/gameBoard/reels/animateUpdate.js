import { SYMBOLS_INDEXES } from "./reelContent.js"

console.log(SYMBOLS_INDEXES)
const SYMBOL_SIZE = 128

export const animateUpdate = (app, reels, symbolTextures, symbolsForResult) => {
  // Listen for animate update.
  app.ticker.add(delta => {
    // Update the slots.
    // for (let i = 0; i < reels.length; i++) {
    for (let i = 0; i < 1; i++) {
      const r = reels[i]
      // Update blur filter y amount based on speed.
      // This would be better if calculated with time in mind also. Now blur depends on frame rate.
      r.blur.blurY = (r.position - r.previousPosition) * 8
      r.previousPosition = r.position
      // console.log(r.previousPosition)
      // Update symbol positions on reel.
      for (let j = 0; j < r.symbols.length; j++) {
        const s = r.symbols[j]
        // console.log(s._texture.textureCacheIds[0])

        const prevy = s.y
        s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE
        if (s.y < 0 && prevy > SYMBOL_SIZE) {
          // Detect going over and swap a texture.
          // This should in proper product be determined from some logical reel.

          s.texture = symbolTextures[SYMBOLS_INDEXES[Math.floor(r.position + 3)]]
          // s.texture =
          //   symbolTextures[Math.floor(Math.random() * symbolTextures.length)]
          console.log(s._texture.textureCacheIds[0])
          // console.log(r.position)
          symbolsForResult.push(s._texture.textureCacheIds[0])
          s.scale.x = s.scale.y = Math.min(
            SYMBOL_SIZE / s.texture.width,
            SYMBOL_SIZE / s.texture.height,
          )
          s.x = Math.round((SYMBOL_SIZE - s.width) / 2)
        }
      }
    }
  })
}
