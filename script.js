const upperCaseLetters = /[A-Z]/g;
const lowerCaseLetters = /[a-z]/g;
const numbers = /[0-9]/g;

const psw = document.getElementById('psw');
const cnfrm = document.getElementById('cnfrm');

const passValidate = function() {
	console.log('Validating...');
	if(psw.value != cnfrm.value) {
		if(!psw.classList.contains("invalid") && !cnfrm.classList.contains("invalid")) {
			console.log('Invalid.');
			psw.classList.add("invalid");
			cnfrm.classList.add("invalid");
		}
	}
	else { 
		if(psw.classList.contains("invalid") && cnfrm.classList.contains("invalid")) {
			console.log('Valid.');
			psw.classList.remove("invalid");
			cnfrm.classList.remove("invalid");
		}
	}
}

psw.onkeyup = passValidate;
cnfrm.onkeyup = passValidate;

const phone = document.getElementById('phone');

phone.onkeyup = function() {
	const entry = phone.value;
	if(entry.length == 10) {
		if(!entry.match(upperCaseLetters) && !entry.match(lowerCaseLetters)) {
			if(phone.classList.contains('invalid')) {
				phone.classList.remove('invalid');
			}
			return;
		}
	}
	if(!phone.classList.contains('invalid')) {
		phone.classList.add('invalid');	
	}
}
