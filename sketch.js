let font

function preload() {
  font = loadFont('fonts/Lato-Regular.ttf')
}

function setup() {
  const canvas = createCanvas(710, 400)
  canvas.parent('root')

  textFont(font)
}

function draw() {
}
