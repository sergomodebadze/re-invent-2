//DOM
nameInput = document.getElementById("nameInput")
PasswordInput = document.getElementById("PasswordInput")
myButton = document.getElementById("myButton")
jsonText = document.getElementById("jsontext")


//addEventListener-ით დავამატე click ფუნქცია მონაცემების შეყვანისთვის
myButton.addEventListener("click", function(){
    //ქვემოთ მოცემული კოდით javascript object-ში შეინახება 
    data = {
        "firstName":nameInput.value,
        "lastName":PasswordInput.value 
    }
    //ქვემოთ მოცემული კოდით JavaScript-ის object გადაიქცევა JSON-ად
    // jsonText.innerText = JSON.stringify(data)
    // console.log(data)
})