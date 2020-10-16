function setup(){
	noCanvas();
	delayES8(2000)
		.then( () => createP('hello'))
		.catch( (err) => console.error(err) );
}

async function delayES8(time) {

	await delay(time);

	return;
}

function delay(time) {
	
	return new Promise((resolve, reject) => {
		
		if(isNaN(time)){
		return 	reject(new Error('delay requires a valid number'));
		}else{
			setTimeout(resolve,time);
		}
	});
}

 