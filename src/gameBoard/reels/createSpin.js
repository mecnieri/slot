import { tweenTo } from "../reels/tweenTo.js"

export const createLongSpin = (reels, tweens, onReelsComplete) => {
  const r = reels[0]
  const extra = Math.floor(Math.random() * 3)
  const target = r.position + 10 + extra
  const time = 2000 + extra * 600
  let tw = tweenTo(
    r,
    "position",
    target,
    time,
    backout(0.5),
    null,
    onReelsComplete,
  )
  tweens.push(tw)

}

export const createShortSpin = (reels, tweens, onReelsCompleteFast) => {
  tweens.pop()

  const r = reels[0]
  // const extra = Math.floor(Math.random() * 3)
  const target = Math.floor(r.position) + 4
  // const target = 13
  const time = 600
  let tw = tweenTo(
    r,
    "position",
    target,
    time,
    backout(0.5),
    null,
    onReelsCompleteFast,
    // 0 === reels.length - 1 ? onReelsComplete : null,
  )
  tweens.push(tw)
}

// Backout function from tweenjs.
// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
function backout(amount) {
  return t => --t * t * ((amount + 1) * t + amount) + 1
}
