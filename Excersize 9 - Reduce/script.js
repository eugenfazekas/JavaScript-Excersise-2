let vals = [5,4,10,2,9];
let biggest = vals.reduce((a,b) => a > b ? a : b);
console.log(biggest);
/*
let vals = [5,4,10,2,9];
function findMax(acc, val) {
	if(val > acc) {
		acc = val;
	}
	return acc;
}
let biggest = vals.reduce(findMax);
console.log(biggest);
*/
/*
let vals = [5,4,1,2,9];
let answer = vals.reduce((acc ,val) => acc + val , 10);
console.log(answer);
*/
/*
let vals = [5,4,1,2,9];

function sum(acc,val) {
	console.log(acc);
	return acc + val;
}
let answer = vals.reduce(sum,10);
console.log(answer);
*/
/*
let vals = [5,4,1,2,9];
let sum = 0 ;
for(let val of vals) {
	sum += val;
}

console.log(sum);

/*
let vals = [5,4,1,2,9];
let sum = 0 ;
for(let i = 0; i < vals.length; i++) {
	sum += vals[i];
}*/