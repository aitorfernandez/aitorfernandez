class Particle {
  constructor(props) {
    Object.assign(this, props)
  }

  update() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.vel.mult(0.99)
  }

  draw(graphics) {
    push()
    translate(this.pos)
    noFill()
    this.shape(this.rad)
    pop()
  }

  shape(r) {
    if (random() < 0.25) {
      rotate(millis() / 1000)
      rect(0, 0, r, r)
    } else {
      ellipse(0, 0, r, r)
    }
  }
}

let circles = []

function setup() {
  const w = 960
  const h = 540
  const canvas = createCanvas(w, h, P2D)
  canvas.parent('canvas')

  const grid = random(30, 40)

  for (let x = 0; x < w; x += grid) {
    for (let y = 0; y < h; y += grid) {
      circles.push(new Particle({
        acc: createVector(0, 0),
        pos: createVector(x, y),
        rad: random([1, 5, 5, 10, 10, 20, 20, 40, 40, 80]),
        vel: createVector(random([-1, 0, 1]), random([-1, 1])),
      }))
    }
  }

  background(255)
}

function draw() {
  circles.forEach((c) => {
    c.update()
    c.draw()
  })
}
