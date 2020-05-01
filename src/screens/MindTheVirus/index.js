import React from "react";
import * as P5 from "p5";
import Game from "./Game";

const sketch = (p) => {
	let game = new Game(p);
	p.setup = () => game.setup();

	p.preload = () => game.preLoad();

	p.draw = () => game.draw();

};

export default function GameWrapperComponent() {
	let ref = React.createRef();
	React.useLayoutEffect(() => {
		new P5(sketch, ref.current)
	}, []);

	return <div className="row ">
		<div className="col-sm-12" ref={ref}></div>
	</div>
}
