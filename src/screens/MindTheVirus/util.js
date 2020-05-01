function detectCollision(brick, {ball}) {
	let bottomOfBrick = brick.position.y + brick.height;
	let topOfBall = ball.position.y - ball.diameter / 2;
	let leftOfBrick = brick.position.x;
	let rightOfBrick = brick.position.x + brick.width;
	if (bottomOfBrick > topOfBall
		&& ball.position.x > leftOfBrick
		&& ball.position.x < rightOfBrick) return true;
	return false;
}

function applyForce(object, force, p5) {
	let f = force.copy();
	if ('acceleration' in object)
		object.acceleration.add(f);
}

export {detectCollision, applyForce};
