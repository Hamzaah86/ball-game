class Ball {
    constructor() {
        this.xspeed = 2;
        this.yspeed = 0;
        this.ballMoving = false;
        this.gameOver = false;
        this.ballRadius = 35;
        this.score = 0;
    }

    setup() {
        this.x = width / 2;
        this.y = height / 2;
    }

    draw(paddleHeight, paddleY, paddle2Height, paddle2Y) {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        if (this.x > width || this.x < 0) {
            this.gameOver = true;
            clearInterval();
            textSize(32);
            text('GAME OVER :(', 150, 150);
            fill(0, 102, 153);
        }
        if (this.x > width - 40) {
            //if (this.y > paddleHeight && this.y < paddleHeight + paddleY && this.x < width) {
            //    this.xspeed = -this.xspeed;
            //    this.score++;
            //    document.querySelector('.score').innerHTML = `Score:${this.score}`;
            //  }
            // this.xspeed = -this.xspeed;
        }

        if (this.x - 40 > 0) {
            if (this.y > paddleY && this.y < paddleHeight + paddleY && this.x > 0) {
                this.xspeed = -this.xspeed;
                this.score++;
            }
        }

        if (this.x - 40 > 640) {
            if (this.y < paddle2Y && this.y < paddle2Height + paddle2Y && this.x > 640) {
                this.xspeed = -this.xspeed;
                this.score++;
            }
        }

        if (this.y + this.ballRadius / 2 > height) {
            this.yspeed = -this.yspeed;
        }

        if (this.y - this.ballRadius / 2 < 0) {
            this.yspeed = -this.yspeed;
        }

        stroke(250, 130, 200);
        strokeWeight(1);
        fill(255, 100, 100);
        ellipse(this.x, this.y, this.ballRadius, this.ballRadius);

        // update() {
    }
}
