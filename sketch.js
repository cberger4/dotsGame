let player;
let enemy = [];
let dot;
let p2o = 7;
let score = 0;

//overdrive code
let box_x = 10;
let box_y = 10;
let box_len = 250;
let box_wid = 40;
let bar_len = 0;
let bar_wid = box_wid - 10;

function setup() {
  createCanvas(700, 700);
  player = new Player();
  enemy.push(new Enemy());
  dot = new Dot();

}

function draw() {
  background(0);



  // if (score % p2o == 0){ //invicibility
  //     if (enemy[i].hits(player)) {
  //       enemy.splice(i, 1);
  //     }
  //   }



  for (let i = 0; i < enemy.length; i++) {
    enemy[i].show();
    enemy[i].update();



    if (enemy[i].hits(player)) {
      console.log("HIT");

      enemy.splice(0, enemy.length);
      score = 0;
      enemy.push(new Enemy());
      dot = new Dot();




      //enemy.splice(i, 1);
    }


  }


  dot.show();

  if (dot.hits(player)) {
    dot = new Dot();
    score += 1;
    player.score += 1;
    enemy.push(new Enemy());
  }

  textAlign(CENTER, CENTER);
  textSize(24);
  text("Score: " + score, width / 2, height - 20);

  if (player.invincible) {
    for (let i = 0; i < enemy.length; i++) {

      if (enemy[i].hits(player)) {
        enemy.splice(i, 1);
      }
    }
  }





  player.show();
  player.update();
  //console.log(player.x_acc);

  if (keyIsDown(LEFT_ARROW)) {
    player.left();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.right();
  }

  if (keyIsDown(UP_ARROW)) {
    player.up();
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.down();
  }

}

function keyPressed() {




  return false;
}