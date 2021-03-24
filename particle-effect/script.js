const particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);

  const particlesLength = Math.floor(innerWidth / 10);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(25, 189, 128);
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // Size
    this.size = 4;
  }

  // Update movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // Draw a particle
  draw() {
    noStroke();
    fill("rgba(255, 255, 255, 0.5)");
    circle(this.pos.x, this.pos.y, this.size);
  }

  // Detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // Connect particles
  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      let d_max = 150;
      let alpha_max = 1;

      if (d < d_max) {
        // alpha for fading effect of the line
        alpha = ((d_max - d) * alpha_max) / d_max;

        stroke(`rgba(255, 255, 255, ${alpha})`);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
