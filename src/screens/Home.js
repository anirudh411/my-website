import React from "react";
import * as P5 from "p5";
import * as Matter from "matter-js";

const {Engine, World, Bodies} = Matter;


class HomePageCanvas {
    constructor(p5) {
        this.p5 = p5;

    }

    setup({current}) {
        //this.p5.rectMode(this.p5.CENTER);
        let canvas = this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight);
        this.engine = Engine.create();
        this.world = this.engine.world;
        this.ground = Bodies.rectangle(this.p5.width / 2, this.p5.height, this.p5.width, 10, {isStatic: true})

        this.drop = Bodies.rectangle(0, 0, 200, 200);
        World.add(this.world, [this.drop, this.ground]);
        Engine.run(this.engine);
        if (current) {
            console.log(this.p5);
            canvas.parent(current);
            canvas.position(0, 0, 'fixed');
            canvas.elt.style.zIndex = -999;
            console.log(this.ground);

        }

    }

    draw() {
        // this.p5.background(255);
        // this.p5.rect(this.drop.position.x, this.drop.position.y, 20, 20);
        // this.p5.rect(this.ground.position.x, this.ground.position.y, this.p5.width, 40);

    }

}


const P5Component = React.forwardRef(({Sketch}, ref) => {
    const p5Sketch = (p) => {
        let sketch = new Sketch(p);
        p.setup = 'setup' in sketch ? () => sketch.setup(ref) : () => p.createCanvas(400, 400);
        p.preload = 'preload' in sketch ? () => sketch.preLoad() : () => {
        }
        p.draw = 'draw' in sketch ? () => sketch.draw() : () => {
        }
    };
    React.useLayoutEffect(() => {
        new P5(p5Sketch)
    })
    return null;
});

function Home() {
    const ref = React.createRef('home');
    return (
        <div ref={ref} id="home" className="row justify-content-center  align-content-center work-in-progress">
            <P5Component ref={ref} Sketch={HomePageCanvas}/>
            <h1>Work in Progress</h1>
        </div>
    )
}

export default Home;
