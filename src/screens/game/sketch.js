import React from "react";
import * as p5 from "p5";
import Ball from "./Ball"
import Line from "./Bricks";
import Score from "./Score"
import {brickTypeChoices, brickWidthChoices, isBallIntersectingBricks} from "./utils";


class MindTheVirus {

	constructor(p5) {
		this.p5 = p5;
		this.x = 0;

	}

	setup() {
		const canvas = this.p5.createCanvas(600, 600);
		canvas.id('canvas').class("d-block mx-auto");
		this.p5.background(111);
	}

	preload() {

	}

	draw() {
	}

	update() {

	}


}


class Game extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = (p) => {
		const CANVAS_WIDTH = 600;
		const CANVAS_HEIGHT = 600;
		let ball;
		let lines = [];
		let score;
		let playButton;
		let isPlaying = false;


		function updateScore() {
			let idx = isBallIntersectingBricks(ball, lines);
			if (idx >= 0) {
				lines[idx].y = p.random(-CANVAS_HEIGHT / 2, 100);
				switch (lines[idx].type) {
					case 'enemy':
						score.updateValue(-5);
						break;
					case 'friend':
						score.updateValue(2);
						break;
					case 'family':
						score.updateValue(5);
						lines.pop();
						break;
				}
				if (lines.length < 15) {
					lines.push(createBrick());
				}
				//lines[idx].type = random(brickTypeChoices);
			}
			score.show();


		}

		function toggleGameState() {
			isPlaying = !isPlaying;
			if (isPlaying) {
				playButton.elt.innerText = "Pause";
			} else {
				playButton.elt.innerText = "Play";
			}
		}

		function manageBallDirection() {
			if (p.keyIsDown(p.LEFT_ARROW)) {
				if (ball.x > ball.diameter / 2) {
					ball.move(-5);
				}
			}
			if (p.keyIsDown(p.RIGHT_ARROW)) {
				if (ball.x < p.width - ball.diameter / 2) {
					ball.move(+5);
				}
			}
		}

		function createBrick() {
			const brickWidth = p.random(brickWidthChoices);
			const x = p.random(-CANVAS_WIDTH / 2, CANVAS_HEIGHT);
			const y = p.random(-CANVAS_HEIGHT / 2, 100);
			Line.p5 = p;
			return new Line(p.random(brickTypeChoices), x, y, 20, brickWidth);
		}

		p.setup = () => {
			let c = p.createCanvas(600, 600);
			c.id('canvas').class("d-block mx-auto");
			playButton = p.createButton('Play');
			playButton.position(100, -CANVAS_HEIGHT, "relative");
			playButton.parent(this.myRef.current);
			playButton.mousePressed(function () {
				toggleGameState();
			});
			p.textAlign(p.CENTER, p.CENTER);
			Ball.p5 = p;
			score = new Score();
			Score.p5 = p;
			ball = new Ball(100, p.height - 20, 20);
			for (let i = 0; i < 10; i++) {
				lines[i] = createBrick();
			}
			p.background(0);
		};

		p.preload = () => {
			Line.Image.banana = p.loadImage("https://i.ibb.co/SRMmDQ7/apple.png");
			Line.Image.apple = p.loadImage("https://i.ibb.co/7pWVw41/banana.png");
		};

		p.keyPressed = () => {
			if (p.keyCode == 32) {
				toggleGameState();
			}
		};

		p.draw = () => {
			p.background(0);
			ball.draw();
			if (isPlaying)
				manageBallDirection();
			lines.forEach((line, i) => {
				line.draw();
				if (line.y > p.height) {
					if (line.speed < Line.MAX_SPEED)
						line.speed += Line.ACCELERATION;
					line.x = p.random(0, CANVAS_WIDTH);
					line.y = p.random(-CANVAS_HEIGHT / 2, 100);
					line.width = p.random(brickWidthChoices);
				}
				if (isPlaying) {
					line.update();
				}
			});
			updateScore();
		};
	};

	newSketch = (p) => {
		const game = new MindTheVirus(p);

		p.setup = () => {
			game.setup();

		};
		p.draw = () => {
			game.draw();
			game.update();
		}
	};

	componentDidMount() {
		new p5(this.newSketch, this.myRef.current)
	}

	render() {
		return (
			<div className="row ">
				<div className="col-sm-12" ref={this.myRef}>

				</div>
			</div>
		)
	}
}

export default Game;
