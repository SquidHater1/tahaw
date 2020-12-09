function createEventListeners(){
	var optionsButton = document.getElementById('options_button');
	optionsButton.addEventListener('click', handleOptionsButtonClicked);
}

function handleOptionsButtonClicked(event){
	var optionsModal = document.getElementById('options_modal');
	var backdrop = document.getElementById('modal-backdrop');
	backdrop.classList.remove("hidden");
	optionsModal.classList.remove("hidden");
	console.log("== Options Modal Opened!");
}

createEventListeners();