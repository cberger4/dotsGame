class Enemy {

  constructor() {
    this.size = 50;
    this.x = random(this.size / 2, width - this.size / 2);
    this.y = random(this.size / 2, height - this.size / 2);
    this.dir = (Math.floor(Math.random() * 2) == 0) ? 1 : -1;
    this.speed = 2 * this.dir;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.x += this.speed;

    if (this.x > width - this.size / 2 || this.x < this.size / 2) {
      this.speed *= -1;
    }
  }

  hits(player) {
    if ((dist(player.x, player.y, this.x, this.y) < player.size / 2 + this.size / 2)) {
      return true;
    }
  }
}