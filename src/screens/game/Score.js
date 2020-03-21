export default class Score {
	static p5;

	constructor() {
		this.value = 0;
		this.time = 0;
	}

	show() {
		Score.p5.textSize(32);
		Score.p5.fill(0, 102, 153);
		Score.p5.text("score :", 60, 20);
		Score.p5.text(this.value, 150, 20);
		Score.p5.fill(0, 102, 153);
		//Score.p5.text("Time Elapsed :", 120, 50);
		// text(this.time, 250, 50);
		//
	}

	update() {
		this.value++;
		this.time++;
		this.time = Number(this.time / 60).toFixed(2);
	}

	updateValue(n) {
		this.value = this.value + n;

	}
}
