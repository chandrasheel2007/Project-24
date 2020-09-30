class Paper{

    constructor(){

        var options = {

            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            

        }

    this.body = Bodies.circle(300, 500, 40, options);
    this.body.radius = 40;
    World.add(world, this.body)

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(242, 238, 203)
        ellipse(0,0,this.radius);
        pop();

    }

}