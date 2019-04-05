class Ball {
    constructor() {
        this.xspeed = 4;
        this.yspeed = 4;
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
            if (this.x < 0 - 40) {
                this.score2++;
                this.x = this.radomNum(50, 250);
                this.y = this.radomNum(50, 250);
                document.querySelector('.score2').innerHTML = `Score2:${this.score2}`;
            }
        }

        if (this.x + 40 > width) {
            /* When hits the paddle */
            if (this.y > paddle2Y && this.y < paddle2Height + paddle2Y && this.x < width) {
                this.xspeed = -this.xspeed;
            }
            if (this.x > 640) {
                this.score1++;
                //this.impact.play();
                this.x = this.radomNum(50, 250);
                this.y = this.radomNum(50, 250);
                document.querySelector('.score1').innerHTML = `Score1:${this.score1}`;
            }
        }
        if (this.score1 >= 2 || this.score2 >= 2) {
            this.gameOver = true;
        }
        if (this.gameOver === true) {
            // textSize(32);
            // textfont(Audiowide);
            // text('GAME OVER :(', 180, 150);
            textFont('Dokdo');
            textSize(width / 15);
            textAlign(0, CENTER);
            text('GAME OVER :(', 170, 150);
            noLoop();
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
        console.log('creating random number', Math.floor(Math.random() * (max - min)) + min);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
