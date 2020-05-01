import * as Matter from "matter-js";
import * as P5 from "p5";

const {Engine, World, Bodies} = Matter;


export class AngryBirdGame {
    constructor(p5) {
        this.p5 = p5;
    }

    setup({current}) {
        if (current) {
            const canvas = this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight);
            canvas.parent(current);
            canvas.position(0, 0, 'fixed');
            canvas.elt.style.zIndex = -999;
            this.engine = Engine.create();
            this.world = this.engine.world;
            this.ground = new ShapeFactory(this.p5, this.world, Box)
                .createShape(0, this.p5.height - 20, this.p5.width, 20,
                    {isStatic: true});
            Engine.run(this.engine);
        }
    }

    draw() {
        this.p5.background(255,.2);
        this.ground.show();
    }
}

class Box {
    static show(render, x, y, w, h) {
        render.rect(x, y, w, h);
    }
}

class Circle {
}

/**
 * @constructor
 *
 * Creates a body
 * Takes render, physics world and the shape class as parameter
 */
class ShapeFactory {
    constructor(p5, world, shape) {
        this.p5 = p5;
        this.world = world;
        this.shape = shape;
    }

    createShape(x, y, w, h, options) {
        const body = Bodies.rectangle(x, y, w, h, options);
        World.add(this.world, body)
        return {
            x,
            y,
            width: w,
            height: h,
            show: () => this.shape.show(this.p5, body.position.x, body.position.y, w, h),
            body
        }
    }
}