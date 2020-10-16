const wordnikAPI = 'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
const giphyAPI = 'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=';


function setup () {
	fetch(wordnikAPI)
		.then( response => {
			return response.json();
		})
		.then( json => {
			createP(json.word);
			return fetch(giphyAPI + json.word);
		})
		.then( response => {
			return response.json();
		})
		.then( json => {
			createImg(json.data[0].images['fixed_height_small'].url);
		})
		.catch( err => console.log(err));
}

/*
let promise = fetch(wordnikAPI);
promise.then(gotData);
promise.catch(gotErr);

function gotData(data) {
	console.log(data);
};

function gotErr(err) {
	console.log(err);
};

*/
