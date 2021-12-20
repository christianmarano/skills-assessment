// Grab contact-email and contact-phone
var email = document.getElementsByClassName('contact-email'); 
var phone = document.getElementsByClassName('contact-phone');

// Switch between phone number and email address based on contact-select option (changing display property of the elements)
function switchContactType() {
	var selectContact = document.getElementById('contact-select').value;

	if(selectContact === 'email-option'){
		for (var i = 0; i < email.length; i ++){
			email[i].style.display = 'block';
		}
		for (var i = 0; i < phone.length; i ++){
			phone[i].style.display = 'none';
		}
	}
	else {
		for (var i = 0; i < email.length; i ++){
			email[i].style.display = 'none';		}
		for (var i = 0; i < phone.length; i ++){
			phone[i].style.display = 'block';		}
	}
}

// Contact information popover
var info = document.getElementsByClassName('contact-info');

