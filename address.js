/*var contact = {

	//details of the contact
	details: [
		//details go here
	],
//To add new contact's details
addContact: function(){
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var telephone = document.getElementById("telephone").value;
	var mobile = document.getElementById("mobile").value;
	var email = document.getElementById("email").value;

	contact.details.push([firstname, lastname, telephone, mobile, email]);
	return contact.details;
	console.log(contact.details);
}, 

showDetails: function(){
	return contact.details;
	console.log(contact.details);
},
//To update contact's details
updateContact: function (){
	var dl = contact.details.length; //dl = length of details
}
/*
	for (var i = 0; i < dl; i++){
		for (var j = 0; j < dl[i][j]; j++){
			if (j == 0) {
				console.log("edit here");
			}
		}
	}
}
};
// console.log();
console.log(contact.details);
console.log(contact.addContact());
console.log(contact.updateContact());
*/

function addContact(){
	var contact = {
		"firstname": document.getElementById("firstname").value,
		"lastname": document.getElementById("lastname").value,
		"telephone": document.getElementById("telephone").value,
		"mobile": document.getElementById("mobile").value,
		"email": document.getElementById("email").value
	}
	return contact
	console.log(contact)	
}
console.log(contact);