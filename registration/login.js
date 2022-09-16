const myform = document.getElementById("myform")
const email = document.getElementById("email")
const password = document.getElementById("password")
const output = document.querySelector('.output')

myform.addEventListener("submit", function (e) {
    e.preventDefault()

    console.log(email.value);
    if (email.value.length === 0 || password.value.length === 0) {
        alert("fields cannot be empty")
    }
    else {
        if (JSON.parse(localStorage.getItem("userDetails"))) {
            let userme = JSON.parse(localStorage.getItem("userDetails"))

            if (userme.email === email.value && userme.password === password.value) {
                output.innerHTML = '<div class="alert alert-success" role="alert">u have successfuly login</div>'
                window.location.href = "dashboard.html"
             
            }
            else {
                output.innerHTML = '<div class="alert alert-danger" role="alert">invalid email/password</div>'

            }
        }
    }
})