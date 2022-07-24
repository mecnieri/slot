export const defineWinnerPositions = symbolsForResult => {
    // first - top
    // second - middle
    // third - bottom
    let arr = [false, false, false]
    
    // first - bottom
    // second - middle
    // third - top
    let symbols = symbolsForResult.slice(-4, -1)
    if (symbols[0] === symbols[1]) {
      arr[2] = true
      arr[1] = true
    }
    if (symbols[0] === symbols[2]) {
      arr[2] = true
      arr[0] = true
    }
    if (symbols[1] === symbols[2]) {
      arr[1] = true
      arr[0] = true
    }
  
    return arr
  }
  