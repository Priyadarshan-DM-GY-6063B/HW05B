let particles = [];
let waveOffset = 0;
let backgroundHue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  // Update the background with subtle noise-based hue change
  let noiseVal = noise(frameCount * 0.01) * 20;
  setGradient(0, 0, width, height, backgroundHue + noiseVal, backgroundHue + 50 + noiseVal);
  backgroundHue = (backgroundHue + 0.2) % 360;

  // Adjust wave frequency and amplitude based on mouseX position
  let waveFrequency = map(mouseX, 0, width, 0.01, 0.05);
  let waveAmplitude = map(mouseX, 0, width, 20, 80);

  // Draw waves
  drawWaves(waveFrequency, waveAmplitude);

  // Update and display particles, remove faded ones
  particles = particles.filter(p => {
    p.update();
    p.display();
    return !p.isFaded();  // Keep only non-faded particles
  });
}

// Draw waves with dynamic frequency and amplitude
function drawWaves(frequency, amplitude) {
  noFill();
  strokeWeight(2);
  for (let y = 100; y < height; y += 30) {
    beginShape();
    for (let x = 0; x < width; x++) {
      let waveHeight = sin(waveOffset + x * frequency) * amplitude;
      stroke((x + waveOffset) % 360, 80, 80);
      vertex(x, y + waveHeight);
    }
    endShape();
  }
  waveOffset += 0.05;
}

// Create gradient effect for the background
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(color(c1, 100, 50), color(c2, 100, 50), inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

// Handle mouse click to add particles
function mousePressed() {
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

// Particle constructor and behavior
function Particle(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(random(-2, 2), random(-2, 2));
  this.size = random(5, 15);
  this.hue = random(360);
  this.alpha = 255;

  this.update = function () {
    let mouseDir = createVector(mouseX, mouseY).sub(this.pos);
    let dist = mouseDir.mag();
    if (dist < 100) {
      mouseDir.normalize().mult(10 / dist); // Repulsion effect near mouse
      this.vel.add(mouseDir);
    }

    this.pos.add(this.vel);
    this.alpha -= 2;  // Fade effect over time
  };

  this.display = function () {
    fill(this.hue, 100, 100, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  };

  this.isFaded = function () {
    return this.alpha <= 0;
  };
}
