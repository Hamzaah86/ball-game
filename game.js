class Game {
    constructor() {
        this.x = 300;
        this.y = 330;
        this.ball = new Ball();
        this.keyIsDown = 0;
    }

    setup() {
        createCanvas(640, 360);
        frameRate(50);
        this.ball.setup();
    }

    draw() {
        background(110, 100, 255);
        this.ball.draw(80, mouseY);
        fill(0);
        if (mouseY + 80 <= height && mouseY >= 0) {
            rect(10, mouseY, 10, 80);
        } else if (mouseY + 80 > height) {
            rect(10, height - 80, 10, 80);
        } else if (mouseY < 0) {
            rect(10, 0, 10, 80);
        }

        if (mouseY + 80 <= height && mouseY >= 0) {
            rect(width - 20, mouseY, 10, 80);
        } else if (mouseY + 80 > height) {
            rect(width - 20, height - 80, 10, 80);
        } else if (mouseY < 0) {
            rect(width - 20, 0, 10, 80);
        }

        /*keyPressed() {
    if (keyIsDown(LEFT_ARROW) {
        this.x = this.x - 3;
    } else if (keyCode === RIGHT_ARROW) {
        this.x = this.x + 3;
    }*/
    }
}
