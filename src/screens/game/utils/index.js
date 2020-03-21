const brickWidthChoices = [20, 40, 50, 75, 80, 100];
const brickTypeChoices = [
	'enemy',
	'family',
	'enemy',
	'friend',
	'enemy',
	'friend',
	'enemy',
	'friend',
	'enemy',
	'family',
	'enemy',
	'family',
];


function isBallIntersectingBricks(ball, lines) {
	for (let i = 0; i < lines.length; i++) {
		const ballTopY = ball.y - ball.diameter / 2;
		// const ballTopX = ball.x;
		// const ballRightX = ball.x + ball.diameter / 2
		// const ballRightY = ball.y;
		// const ballLeftX = ball.x - ball.diameter / 2
		// const ballLeftY = ball.y;
		if (lines[i].y + lines[i].height > ballTopY) {
			if (ball.x > lines[i].x && ball.x < lines[i].x + lines[i].width) return i;
		}
	}
	return -1;
}


export {
	isBallIntersectingBricks,
	brickTypeChoices,
	brickWidthChoices
}
