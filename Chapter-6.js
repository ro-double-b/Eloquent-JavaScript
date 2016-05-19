// A Vector Type

// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

function Vector(x, y) {
	this.x = x,
	this.y = y,
	this.plus = function(vector) {
		return new Vector((vector.x + this.x), (vector.y + this.y))
	},
	this.minus = function(vector) {
		return new Vector((vector.x - this.x), (vector.y - this.y))
	}
}

Object.defineProperty(Vector.prototype, 'length', {
	get: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
})

// console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// console.log(new Vector(3, 4).length);

// Another Cell