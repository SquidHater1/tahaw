function createEventListeners(){
	var optionsButton = document.getElementById('options_button');
	optionsButton.addEventListener('click', handleOptionsButtonClicked);

	var closeOptionsButton = document.getElementById('close_modal');
	closeOptionsButton.addEventListener('click', handleCloseOptionsButtonClicked);
}

function handleOptionsButtonClicked(event){
	var optionsModal = document.getElementById('options_modal');
	var backdrop = document.getElementById('modal-backdrop');
	backdrop.classList.remove("hidden");
	optionsModal.classList.remove("hidden");
	console.log("== Options Modal Opened!");
}

function handleCloseOptionsButtonClicked(event){
	closeOptions();
}

function closeOptions(){
	var optionsModal = document.getElementById('options_modal');
	var backdrop = document.getElementById('modal-backdrop');
	backdrop.classList.add("hidden");
	optionsModal.classList.add("hidden");
	console.log("== Options Modal Closed!");
}

//function updateScoreboards(){

//}

/*
var loops = 0;
setInterval(function(){
	var titleName = document.getElementsByClassName('site-title')[0];
	titleName.innerHTML = "TaHaw"+ loops;
	loops += 1;
}, 1000);
*/
createEventListeners();