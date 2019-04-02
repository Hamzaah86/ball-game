class Ball {
    constructor() {
        this.xspeed = 2;
        this.yspeed = 2;
        this.ballMoving = false;
        this.ballSpeed;
        this.gameOver;
        this.ballRadius = 35;
        // this.interval = setInterval(draw, 1000);
    }

    setup() {
        this.x = 0;
        this.y = 0;
    }
    draw(paddleX, paddleWidth) {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        if (this.x > width || this.x < 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.y < 0) {
            this.yspeed = this.yspeed * -1;
        }

        if (this.y > height - 40) {
            if (this.x > paddleX && this.x < paddleX + paddleWidth) {
                this.yspeed = -this.yspeed;
            } else {
                console.log('die');
            }
        }

        /*if (this.y >= 330 && this.y >= Ball.length) {
            this.yspeed = yspeed - 1;
        }*/

        stroke(120, 230, 200);
        strokeWeight(1);
        fill(120);
        ellipse(this.x, this.y, this.ballRadius, this.ballRadius);
    }

    update() {}
}
