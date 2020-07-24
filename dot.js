class Dot {

  constructor() {
    this.size = 15;
    this.x = random(this.size / 2, width - this.size / 2);
    this.y = random(this.size / 2, height - this.size / 2);
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  hits(player) {
    if ((dist(player.x, player.y, this.x, this.y) < player.size / 2 + this.size / 2)) {
      return true;
    }
  }
}