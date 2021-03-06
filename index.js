function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var colors = ['red', 'white', 'blue']

  colors.forEach(callback)

  return colors
}

function doToArray(array, callback) {
  array.forEach(callback)
}
