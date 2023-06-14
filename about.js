console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your message has been successfully submitted!');
}


// let form = document.querySelector('#contact');

let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('submit', handleSubmit);