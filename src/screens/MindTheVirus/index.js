import React from "react";
import * as P5 from "p5";


class Bricks {

	constructor(game) {
		this.position = {
			x: game.p5.random(0, game.p5.width),
			y: game.p5.random(-game.p5.width / 2, 100),
		};
		this.type = game.p5.random(brickTypeChoices);
		this.width = game.p5.random(brickWidthChoices)
	}

	draw() {

	}

	update() {

	}

}


class Ball {
	constructor(game) {
		this.game = game;
		this.diameter = 20;

		this.position = {
			x: 100,
			y: game.p5.height - this.diameter / 2
		};
	}

	draw() {
		this.game.p5.push();
		this.game.p5.noStroke();
		this.game.p5.fill(255, 0, 0);
		this.game.p5.circle(this.position.x, this.position.y, this.diameter);
		this.game.p5.pop();
	}

	move(n) {
		this.position.x = this.position.x + n;
	}

}

class InputHandler {

	constructor(game) {
		this.game = game;
	}

	manageMovements() {
		const {LEFT_ARROW, RIGHT_ARROW, width} = this.game.p5;
		const {position, diameter} = this.game.ball
		if (this.game.p5.keyIsDown(LEFT_ARROW)) {
			if (position.x > diameter / 2) {
				this.game.ball.move(-5);
			}

		}
		if (this.game.p5.keyIsDown(RIGHT_ARROW)) {
			if (position.x + diameter / 2 < width) {
				this.game.ball.move(5);
			}
		}
	}

}

const brickWidthChoices = [20, 40, 50, 75, 80, 100];
const brickTypeChoices = [
	'enemy',
	'family',
	'enemy',
	'friend',
	'enemy',
	'friend',
	'enemy',
	'friend',
	'enemy',
	'family',
	'enemy',
	'family',
];

class Game {
	static  brickWidthChoices = brickWidthChoices;
	static  brickTypeChoices = brickTypeChoices;

	constructor(p5) {
		this.p5 = p5;
		this.gamewidth = 600;
		this.gameHeight = 600;

	}

	preLoad() {

	}

	setup() {
		const canvas = this.p5.createCanvas(this.gamewidth, this.gameHeight);
		this.ball = new Ball(this);
		this.inputHandler = new InputHandler(this);
		canvas.id('canvas').class("d-block mx-auto");
		this.p5.background(111);
		this.gameObjects = [this.ball];

	}

	draw() {
		this.p5.background(111);
		this.gameObjects.forEach(object => object.draw());
		this.inputHandler.manageMovements();
	}


}


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
		<div className="col-sm-12" ref={ref}>
		</div>
	</div>
}
