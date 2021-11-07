class Particle {
  constructor(props) {
    this.blend = int(random(999))
    Object.assign(this, props)
  }

  update() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.vel.mult(0.999)

    if (frameCount === this.blend) {
      this.color = lerpColor(color(this.color), color(randColor()), 0.24)
    }
  }

  draw(graphics) {
    push()
    translate(this.pos)
    fill(this.color)
    ellipse(0, 0, this.rad, this.rad)
    pop()
  }
}

function randColor() {
  return randomColor({
    alpha: random(),
    format: 'rgba',
  })
}

let circles = []

function setup() {
  const w = 960
  const h = 432
  const canvas = createCanvas(w, h, P2D)
  canvas.parent('canvas')

  const grid = random(48, 72)

  for (let x = 0; x < w; x += grid) {
    for (let y = 0; y < h; y += grid) {
      circles.push(new Particle({
        acc: createVector(0, 0),
        pos: createVector(x, y),
        rad: random([1, 5, 5, 10, 10, 20, 20, 40, 40, 80]),
        vel: createVector(random([-1, 0, 1]), random([-1, 1])),
        color: randColor(),
      }))
    }
  }

  background(255)
}

function draw() {
  let ms = millis()
  if (ms < 1500) {
    return
  }

  noStroke()

  circles.forEach((c) => {
    c.update()
    c.draw()
  })
}

function mousePressed() {
  noLoop();
}
