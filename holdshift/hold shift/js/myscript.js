const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

function handleCheck(e) {

	let inBetween = false;

	if(e.shiftKey && this.checked) {	//check if shift is down && check if they are checking it

		checkboxes.forEach(checkbox => { //loop over each checkbox
			if(checkbox === this || checkbox === lastChecked) { 
				inBetween = !inBetween; //if false make true, if true make false

			}

			if(inBetween) {
				checkbox.checked = true;
				//if checkbox is between 'this' and lastchecked then check it
			}
		});
	}
	

	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
