export const countScore = arr => {
  let score = 0
  //   console.log(arr)
  if (arr[0] === arr[1]) {
    score++
  }
  if (arr[0] === arr[2]) {
    score++
  }
  if (arr[1] === arr[2]) {
    score++
  }

  if (score === 1) {
    return 2
  }
  if (score === 3) {
    return 3
  }
  return 0
}
