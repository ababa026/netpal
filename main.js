const email = document.getElementById("email")
const form = document.getElementById("form")
const errorElement = document.getElementById("ERROR")

form.addEventListener("submit" (e) => {
	let message = []
	if(email.value==="" || email.value == null) {
		message.push("Email is required")
	}

	if (message.lenght > 0){
		e.preventDefault()
		errorElement.innerText = message.join(", ")
	}
}