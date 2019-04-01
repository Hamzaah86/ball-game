//const GAME_WIDTH = 500;
//const GAME_HEIGHT = 300;

class Game {
    constructor() {
        var x = canvas.width / 2;
        var y = canvas.height - 30;
        var dx = 2;
        var dy = -2;
    }

    setup() {
        createCanvas(640, 360);
        background(120, 100, 255);
    }

    draw() {
        clear();
        background(120, 100, 255);
        if (mouseIsPressed) {
            fill(0);
            ellipse(mouseX, mouseY, 80, 80);
        } else {
            fill(255);
        }
    }
}
