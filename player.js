class Player {

  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.x_vel = 0;
    this.y_vel = 0;
    this.size = 75;
    this.acc_change = 0.05;
    this.x_acc = 0;
    this.y_acc = 0;
    this.fric = 0.5;
    this.max_acc = 0.5;
    this.score = 0;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  invincible() {
    if (this.score >= 3) {
      return true;
    }
  }

  update() {
    this.x_vel += this.x_acc;
    this.y_vel += this.y_acc;

    this.x_acc *= this.fric;
    this.y_acc *= this.fric;

    this.x += this.x_vel;
    this.y += this.y_vel;


    if (this.x_acc > this.max_acc) {
      //this.x_acc = this.max_acc;
    }

    if ((this.x - this.size / 2) < 0) {
      this.x = this.size / 2;
      this.x_vel *= -0.5;
    }

    if ((this.x + this.size / 2) > width) {
      this.x = width - this.size / 2;
      this.x_vel *= -0.5;
    }

    if ((this.y - this.size / 2) < 0) {
      this.y = this.size / 2;
      this.y_vel *= -0.5;
    }

    if ((this.y + this.size / 2) > height) {
      this.y = height - this.size / 2;
      this.y_vel *= -0.5;
    }
  }

  left() {
    this.x_acc -= this.acc_change;
  }

  right() {
    this.x_acc += this.acc_change;
  }

  up() {
    this.y_acc -= this.acc_change;
  }

  down() {
    this.y_acc += this.acc_change;
  }

}