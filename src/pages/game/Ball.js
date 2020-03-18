class Ball {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.diameter = r || 20;
		this.xDirection = 11;
		this.yDirection = 13;
	}

	move(n) {
		if (this.x > this.diameter / 2 || this.x < width - this.diameter / 2)
			this.x = this.x + n;
	}


	draw() {
		let r = ball.x % 255;
		// let g = map(this.y, 0, height, 0, 255);
		let b = ball.y % 255;
		push()
		noStroke()

		fill(255, 0, 0);
		pop()
		//noFill()
		//noStroke()
		//image(spaceShip, this.x, this.y);
		circle(this.x, this.y, this.diameter);
	}

	update() {
		this.x = this.x + this.xDirection
		this.y = this.y + this.yDirection
		if (this.x > width - this.diameter / 2 || this.x < this.diameter / 2) {
			this.xDirection *= -1;
		}
		if (this.y > height - this.diameter / 2 || this.y < this.diameter / 2) {
			this.yDirection *= -1;
		}

	}
}
