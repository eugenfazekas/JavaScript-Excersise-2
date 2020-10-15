function multiplier(factor) {
	return function(x) {
		return x * factor;
	}
}

let doubler = multiplier(2);
let tripler = multiplier(3);

/*	
	function sing(callback) {
	console.log('la la la la la');
	if(callback instanceof Function){
	callback();
	}
}

	function meow() {
		console.log('meow meow');
	}
	
	function setup() {
		
		sing( () => {console.log('meow meow'); } )
}
*/
/*
function sing(callback) {
	console.log('la la la la la');
	callback();
}

	function meow() {
		console.log('meow meow');
	}
	
	function setup() {
	sing(meow);
}
*/

//
