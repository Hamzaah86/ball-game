class Ball {
    constructor() {
        this.xspeed = 3;
        this.yspeed = 3;
        this.ballMoving = false;
        this.gameOver = false;
        this.ballRadius = 35;
        this.score1 = 0;
        this.score2 = 0;
    }

    setup() {
        this.x = width / 2;
        this.y = height / 2;
    }

    draw(paddleHeight, paddleY, paddle2Height, paddle2Y) {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        if (this.x - 40 < 0) {
            if (this.y > paddleY && this.y < paddleHeight + paddleY && this.x > 0) {
                this.xspeed = -this.xspeed;
            }
            if (this.x === 0 - 1) {
                this.score2++;
                this.x = 200;
                this.y = 50;
                document.querySelector('.score2').innerHTML = `Score2:${this.score2}`;
            }
        }

        if (this.x + 40 > width) {
            if (this.y > paddle2Y && this.y < paddle2Height + paddle2Y && this.x < width) {
                this.xspeed = -this.xspeed;
            }
            if (this.x === width + 1) {
                this.score1++;
                this.x = 200;
                this.y = 50;
                document.querySelector('.score1').innerHTML = `Score1:${this.score1}`;
                if (this.score1 >= 5 && this.score2 >= 5) this.gameOver = true;
                clearInterval();
                text('GAME OVER :(', 10, 90);
                fill(0, 102, 153, 51);
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
    radomNum(min, max) {
        return Math.floor(Math.random() * 20) + 100;
    }
}
