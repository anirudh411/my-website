export default class InputHandler {

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
