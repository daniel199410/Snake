var WIDTH = 500
var HEIGHT = 500
var INITIAL_PIECES = 7
var INITIAL_Y = 100
var PIECE_WIDTH = 10

function draw() {
  background(56)
  snake.move()
  snake.drawSnake()
  food.draw()
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(56)
  frameRate(7)
  snake = new snake()
  food = new food()
  food.generate()
}

function keyPressed(){
  switch(keyCode){
    case UP_ARROW:
      if(snake.direction != "DOWN")
        snake.direction = "UP"
    break;
    case DOWN_ARROW:
      if(snake.direction != "UP")
        snake.direction = "DOWN"
    break;
    case LEFT_ARROW:
      if(snake.direction != "RIGHT")
        snake.direction = "LEFT"
    break;
    case RIGHT_ARROW:
      if(snake.direction != "LEFT")
        snake.direction = "RIGHT"
    break;
  }
}