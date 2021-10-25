class Circle {
  constructor(props) {
    Object.assign(this, props)
  }

  update() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.vel.mult(0.9)
  }

  draw(graphics) {
    push()
    translate(this.pos)
    fill(51)
    circle(300, 300, 20)
    pop()
  }
}

let circles = []

function setup() {
  const w = 960
  const h = 540
  const canvas = createCanvas(w, h, P2D)
  canvas.parent('canvas')

  for (let i = 0; i < 1; i++) {
    circles.push(new Circle({
      pos: createVector(0, 0),
      vel: createVector(random([-1, 0, 1]), random([-1, 1])),
			acc: createVector(0,0),
    }))
  }

  background(255)
}

function draw() {
  circles.forEach((c) => {
    c.update()
    c.draw()
  })
}
