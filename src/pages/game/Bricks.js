export default class Line {
	static p5;
	static Image = {
		apple: '',
		banana: ''
	};
	static MAX_SPEED = 4.5;
	static ACCELERATION = .3;

	constructor(type, x = 0, y = 0, height = 10, width = Line.p5.random(10, 100)) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.speed = Line.p5.random(.5, 2.5);
		this.type = type;

	}

	draw() {
		let r;
		let b;
		let g;
		r = g = b = 0;
		Line.p5.noStroke();
		switch (this.type) {
			case 'enemy':
				r = 244;
				g = 0;
				b = 0;
				Line.p5.fill(r, g, b);
				let width = this.x + this.width;
				let x = this.x;
				while (x < width) {
					Line.p5.triangle(x, this.y + this.height, x + 2.5, this.y + this.height + 5, x + 5, this.y + this.height);
					Line.p5.triangle(x, this.y, x + 2.5, this.y - 5, x + 5, this.y);
					x = x + 5;
				}

				for (let y = this.y; y < this.y + this.height; y = y + 5) {
					Line.p5.triangle(this.x + this.width, y, this.x + this.width + 5, y + 2.5, this.x + this.width, y + 5);
					Line.p5.triangle(this.x, y, this.x - 5, y + 2.5, this.x + 5, y + 5);
				}
				Line.p5.rect(this.x, this.y, this.width, this.height);

				break;
			case 'family':
				r = 25;
				g = 118;
				b = 210;
				Line.p5.fill(r, g, b);
				this.width = 70;
				this.height = 50
				Line.p5.image(Line.Image.apple, this.x, this.y, this.width, this.height);
				//rect(this.x, this.y, this.width, this.height);
				break;
			default:
				r = 0;
				g = 0;
				g = 255;
				Line.p5.fill(r, g, b);
				// rect(this.x, this.y, this.width, this.height);
				Line.p5.push();
				this.width = 50;
				this.height = 40;
				Line.p5.image(Line.Image.banana, this.x, this.y, 50, 40);
				Line.p5.pop();
		}
	}

	update() {
		// if (this.type == 'enemy') {
		// 	this.x += Line.p5.random(-2,2);
		// }
		this.y += this.speed;
	}
}
