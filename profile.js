function handleColor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is Red!');
}

function handlePlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is San Diego, CA!');
}

function handleRitual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is getting a drink with my brothers!');
}

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click', handleColor)
placeBtn.addEventListener('click', handlePlace)
ritualBtn.addEventListener('click', handleRitual)