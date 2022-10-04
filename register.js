emailInput = document.getElementById("emailInput")
usernameInput = document.getElementById("usernameInput")
passwordInput = document.getElementById("passwordInput")
confirmInput = document.getElementById("confirmInput")
myButton = document.getElementById("myButton")
jsontext = document.getElementById("jsontext")


myButton.addEventListener("click", function() {
    data = {
        "Email":emailInput.value,
        "userName":usernameInput.value,
        "Password":passwordInput.value,
        "confirmPassword":confirmInput.value
    }
    // console.log(data)
})