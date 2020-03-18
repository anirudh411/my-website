export default class Ball {

	static p5;

	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.diameter = r || 20;
		this.xDirection = 11;
		this.yDirection = 13;
	}

	move(n) {
		if (this.x > this.diameter / 2 || this.x < Ball.p5.width - this.diameter / 2)
			this.x = this.x + n;
	}


	draw() {

		Ball.p5.push();
		Ball.p5.noStroke();
		Ball.p5.fill(255, 0, 0);
		Ball.p5.pop();
		//noFill()
		//noStroke()
		//image(spaceShip, this.x, this.y);
		Ball.p5.circle(this.x, this.y, this.diameter);
	}

	update() {
		this.x = this.x + this.xDirection
		this.y = this.y + this.yDirection
		if (this.x > Ball.p5.width - this.diameter / 2 || this.x < this.diameter / 2) {
			this.xDirection *= -1;
		}
		if (this.y > Ball.p5.height - this.diameter / 2 || this.y < this.diameter / 2) {
			this.yDirection *= -1;
		}

	}
}
