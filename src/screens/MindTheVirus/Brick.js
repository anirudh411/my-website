import {detectCollision} from "./util";

export default class Brick {
	static brickWidthChoices = [20, 30, 40, 50];
	;
	static brickTypeChoices = [
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

	constructor(game) {
		this.position = game.p5.createVector(game.p5.random(0, game.p5.width), game.p5.random(-game.p5.height, 0));
		this.speed = 1.1;
		this.game = game;
		this.type = game.p5.random(Brick.brickTypeChoices);
		this.width = this.height = game.p5.random(Brick.brickWidthChoices);
		this.angle = 0;

	}

	draw() {
		this.game.p5.angleMode(this.game.p5.DEGREES);
		this.angle++;
		this.angle = this.angle % 360;
		let r, g, b;
		switch (this.type) {
			default:
			case "friend":
				this.width = 30;
				this.height = 40;
				this.game.p5.image(this.game.santizerImage, this.position.x, this.position.y, this.width, this.height);
				break;
			case "family":
				this.width = this.height = 50;
				this.game.p5.image(this.game.maskImage, this.position.x, this.position.y, this.width, this.height);
				break;
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
		this.position.y += this.speed;
		if (this.position.y - this.width / 2 > this.game.p5.height) {
			this.position.y = this.game.p5.random(-this.game.p5.height, 0);
		}
		if (detectCollision(this, this.game)) {
			this.speed = .1;
			this.position.y = this.game.p5.random(-this.game.p5.height, 0);
			if (this.type === "enemy") this.game.score.update((this.width / 10) * -1);
			if (this.type === "friend") this.game.score.update(1);
			if (this.type === "family") this.game.score.update(2);
		}
	}
}
