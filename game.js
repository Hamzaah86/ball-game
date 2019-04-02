class Game {
    constructor() {
        this.x = 300;
        this.y = 330;
        this.ball = new Ball();
    }

    setup() {
        createCanvas(640, 360);
        frameRate(50);
        this.ball.setup();
    }

    draw() {
        background(110, 100, 255);
        this.ball.draw(mouseX, 90);
        fill(0);
        rect(mouseX, 340, 90, 20);
    }

    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            this.x = this.x - 3;
        } else if (keyCode === RIGHT_ARROW) {
            this.x = this.x + 3;
        }
    }
}
