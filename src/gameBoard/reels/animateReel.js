// Listen for animate update.

export const movingReelTicker = (app, tweens) => {
  app.ticker.add(delta => {
    const now = Date.now()
    const remove = []
    for (let i = 0; i < tweens.length; i++) {
      const t = tweens[i]
      const phase = Math.min(1, (now - t.start) / t.time)

      t.object[t.property] = lerp(
        t.propertyBeginValue,
        t.target,
        t.easing(phase),
      )
      if (t.change) t.change(t)
      if (phase === 1) {
        t.object[t.property] = t.target
        if (t.complete) t.complete(t)
        remove.push(t)
      }
    }
    for (let i = 0; i < remove.length; i++) {
      tweens.splice(tweens.indexOf(remove[i]), 1)
    }
  })
}

// Basic lerp funtion.
function lerp(a1, a2, t) {
  return a1 * (1 - t) + a2 * t
}

