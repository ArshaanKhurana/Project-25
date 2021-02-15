class Paper {
    constructor(x, y, r) {

        this.image = loadImage("white hat jr paper.png");
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
          
        }
        this.body = Bodies.circle(x, y, r / 2, options)
        this.r = r;
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill("red")
        ellipse(0, 0, this.r, this.r);
        pop()
    }
}