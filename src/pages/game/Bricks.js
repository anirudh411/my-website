
class Line {
	static MAX_SPEED = 4.5;
	static ACCELERATION = .3;
	constructor(type, x = 0, y = 0, height = 10, width = random(10, 100)) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.speed = 2;
		this.type = type;
	
	}
	draw() {
		let r;
		let b;
		let g;
		r = g = b = 0;
		noStroke();
		switch (this.type) {
			case 'enemy':
				r = 244;
				g = 0;
				b = 0;
				fill(r, g, b);
				let width = this.x + this.width;
				let x = this.x;
				while (x < width) {
					triangle(x, this.y + this.height, x + 2.5, this.y + this.height + 5, x + 5, this.y + this.height);
					triangle(x, this.y, x + 2.5, this.y - 5, x + 5, this.y);
					x = x + 5;
				}

				for (let y = this.y; y < this.y + this.height; y = y + 5) {
					triangle(this.x + this.width, y, this.x + this.width + 5, y + 2.5, this.x + this.width, y + 5);
					triangle(this.x, y, this.x - 5, y + 2.5, this.x + 5, y + 5);
				}
				rect(this.x, this.y, this.width, this.height);

				break;
			case 'family':
				r = 25;
				g = 118;
				b = 210;
				fill(r, g, b);
				this.width = 70;
				this.height = 50
				image(appleImage, this.x, this.y, this.width, this.height);
				//rect(this.x, this.y, this.width, this.height);
				break;
			default:
				r = 0;
				g = 0;
				g = 255;
				fill(r, g, b);
				// rect(this.x, this.y, this.width, this.height);
				push();	
				this.width=50;
				this.height=40;
				image(bananaImage, this.x, this.y, 50, 40);
				pop();
		}
	}

	update() {
		this.y += this.speed;
	}
	if
}
