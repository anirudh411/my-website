import Ball from "./Ball";
import Score from "./Score";
import Brick from "./Brick";
import InputHandler from "./InputHandler";
import {applyForce} from "./util";

export default class Game {

	static wind;

	constructor(p5) {
		this.p5 = p5;
		this.gamewidth = 600;
		this.gameHeight = 600;
	}

	preLoad() {
		this.santizerImage = this.p5.loadImage("https://i.ibb.co/Lv68LJ5/st.png");
		this.maskImage = this.p5.loadImage("https://i.ibb.co/GHyHLH1/mask.png");

	}

	//applyForce(object, gravity);

	setup() {
		const canvas = this.p5.createCanvas(this.gamewidth, this.gameHeight);
		this.ball = new Ball(this);
		this.score = new Score(this);
		this.bricks = Array.from({length: 10}, (item) => new Brick(this));
		this.inputHandler = new InputHandler(this);
		canvas.id('canvas').class("d-block mx-auto");
		this.p5.background(111);
		this.gameObjects = [this.ball, this.score, ...this.bricks];
		Game.wind = this.p5.createVector(0.1, 0);

	}

	draw() {
		this.p5.background(111);
		this.gameObjects.forEach((object => {
			if ('acceleration' in object) {
				object.checkEdges();
			}
			object.update();
			object.draw()
		}));
		this.inputHandler.manageMovements();
	}
}
