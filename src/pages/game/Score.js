class Score {
	constructor() {
		this.value = 0,
			this.time = 0;
	}
	show() {
		textSize(32);
		fill(0, 102, 153);
		text("score :", 60, 20);
		text(this.value, 150, 20);
		fill(0, 102, 153);
		text("Time Elapsed :", 120, 50);
		text(this.time, 250, 50);

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
