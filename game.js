class Game {
    constructor() {
        this.ball = new Ball();
        this.keyIsDown = 0;
    }

    setup() {
        createCanvas(640, 360);
        frameRate(50);
        this.ball.setup();
        this.x = width - 20;
        this.y = 0;
    }

    draw() {
        background(100, 111, 230);
        this.ball.draw(80, mouseY, 80, this.y);
        fill(0);
        if (mouseY + 80 <= height && mouseY >= 0) {
            rect(10, mouseY, 10, 80);
        } else if (mouseY + 80 > height) {
            rect(10, height - 80, 10, 80);
        } else if (mouseY < 0) {
            rect(10, 0, 10, 80);
        }

        rect(this.x, this.y, 10, 80);
        this.movePaddle();
    }

    movePaddle() {
        if (keyIsDown(UP_ARROW)) {
            if (this.y > 0) this.y = this.y - 10;
        } else if (keyIsDown(DOWN_ARROW)) {
            if (this.y + 80 < height) this.y = this.y + 10;
        }
    }
}
