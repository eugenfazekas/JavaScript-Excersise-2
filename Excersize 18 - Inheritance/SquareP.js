class SquareP extends Particle{

	constructor(x, y) {
	super(x,y);
	this.bright = random(255);
	this.r = 10;
	}

	update() {
		super.update();
		this.r += random(-2,2);
	}
	show() {
		stroke(255);
		strokeWeight(1);
		fill(this.bright);
		square(this.x, this.y,this.r);
	}
}
