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

export default Ball;
