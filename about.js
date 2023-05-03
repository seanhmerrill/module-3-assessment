console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your message has been successfully submitted!');
}


let form = document.querySelector('#contact');

let form_1 = document.querySelector('#submit');

form.addEventListener('submit', handleSubmit);