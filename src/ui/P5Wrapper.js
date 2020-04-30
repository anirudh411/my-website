import React from "react";
import * as P5 from "p5";

const P5Component = React.forwardRef(({Sketch}, ref) => {
    React.useLayoutEffect(() => {
        const p5Sketch = (p) => {
            const sketch = new Sketch(p);
            p.setup = 'setup' in sketch ? () => sketch.setup(ref) : () => p.createCanvas(400, 400);
            p.preload = 'preload' in sketch ? () => sketch.preLoad() : () => null
            p.draw = 'draw' in sketch ? () => sketch.draw() : () => null;
        };
        new P5(p5Sketch)
    }, [Sketch], () => {
        P5.remove();
    });
    return null;
});

export {P5Component};