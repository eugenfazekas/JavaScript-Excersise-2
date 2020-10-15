let s = "It was a  dark and stromy night.";
let words = s.split(/\W+/).filter(word => word.length);
//let words = s.split(/\W+/).filter(word => word.length >=3);
console.log(words); 
/*
let vals = [5,4,10,2,9];

vals = vals.filter(x => x % 2 ==0);
console.log(vals);
*/
/*
let vals = [5,4,10,2,9];

function isEven(num) {
	return (num % 2 == 0) 
}
vals = vals.filter(isEven);

console.log(vals);
*/
