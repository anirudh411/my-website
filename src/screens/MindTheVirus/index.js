import React from "react";
import * as P5 from "p5";


class Brick {

	constructor(game) {
		this.position = {
			x: game.p5.random(0, game.p5.width),
			y: game.p5.random(-game.p5.height, game.p5.height / 2),
		};
		this.game = game;
		this.type = game.p5.random(brickTypeChoices);
		this.width = game.p5.random(brickWidthChoices);
		this.angle = 0;

	}

	draw() {
		this.game.p5.angleMode(this.game.p5.DEGREES);
		this.angle++;
		this.angle = this.angle % 360;
		let r, g, b;
		switch (this.type) {

			default:

			case "enemy":
				r = 244;
				g = 0;
				b = 0;
				this.game.p5.fill(0);
				this.game.p5.noStroke();
				this.game.p5.angleMode(this.game.p5.DEGREES);
				let l = this.width - this.width / 4;

				// circle and spikes
				this.game.p5.push();
				this.game.p5.stroke(0);
				this.game.p5.translate(this.position.x, this.position.y);
				this.game.p5.rotate(this.angle);
				for (let i = 0; i <= 360; i += 10) {
					this.game.p5.strokeWeight(2);
					this.game.p5.line(0, 0, l * this.game.p5.cos(i), l * this.game.p5.sin(i));
				}
				this.game.p5.fill(r, g, b);
				this.game.p5.noStroke(0);
				this.game.p5.circle(0, 0, this.width);
				this.game.p5.pop();


		}

	}

	update() {
		this.position.y++;
		if (this.position.y - this.width / 2 > this.game.p5.height) {
			this.position.y = this.game.p5.random(-this.game.p5.height, 0);
		}


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

	update() {

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

const brickWidthChoices = [20, 30, 40, 50];
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
		this.bricks = Array.from({length: 10}, (item) => new Brick(this));
		this.inputHandler = new InputHandler(this);
		canvas.id('canvas').class("d-block mx-auto");
		this.p5.background(111);
		this.gameObjects = [this.ball, ...this.bricks];

	}

	draw() {
		this.p5.background(111);
		this.gameObjects.forEach(object => object.draw());
		this.gameObjects.forEach((object => object.update()));
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
