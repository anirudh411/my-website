class Score {
	constructor(game) {
		this.game = game;
		this.value = 0

	}
	draw() {
		this.game.p5.push();
		this.game.p5.fill(0);
		this.game.p5.rect(0, 0, this.game.p5.width, 32);
		this.game.p5.textSize(22);
		this.game.p5.fill(255);
		this.game.p5.text("Score :", 20, 32);
		this.game.p5.text(this.value, 120, 32);
		this.game.p5.pop();

	}
	update(value = 0) {
		this.value += value;
		this.game.p5.push();
		this.game.p5.fill(0);
		this.game.p5.rect(0, 0, this.game.p5.width, 32);
		this.game.p5.textSize(22);
		this.game.p5.fill(255);
		this.game.p5.text("Score :", 20, 22);
		this.game.p5.text(this.value, 120, 22);
		this.game.p5.pop();

	}


}


export default Score
