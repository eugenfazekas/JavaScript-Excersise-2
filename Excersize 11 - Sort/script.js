let s = "It was a  dark and stormy night.";
let words = s.split(/\W+/).filter(word => word.length > 2);
words.sort((a,b) => a.length - b.length);
console.log(words); 

/*
let s = "It was a  dark and stromy night.";
let words = s.split(/\W+/).filter(word => word.length > 2);
words.sort();
console.log(words); 
*/

/*
let vals = [{x:2, y:10}, {x:5, y:6}, {x:2, y:8}, {x:3, y:7}]

function log() {
console.log(vals);
}

log();

function compare(a,b) {
	return a.y - b.y;
}

vals.sort(compare);

console.log(vals);
*/

/*
let vals = [5,4,9,2,1];
console.log(vals);
vals.sort();
console.log(vals);
 */
