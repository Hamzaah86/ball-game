class ball {
    constructor() {

    setup() {
        this.yp = 200;
        
        this.x = 300;
        this.velocity = 0;
        this.firstMouseClick = true;
    }
    draw() 
       
        

        fill(0)

    
if (mouseIsPressed) {
    if (this.firstMouseClick) {
        this.velocity =  -4
        this.firstMouseClick = false
    }
    this.velocity += ACCELERATION * -1
} else {
    this.firstMouseClick = true
    this.velocity += ACCELERATION
}

this.ypos += this.velocity
    }
}