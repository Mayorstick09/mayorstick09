
const myForm = document.getElementById('myForm')
const FullName = document.getElementById('FullName')
const LastName = document.getElementById('LastName')
const myEmail = document.getElementById('email')
const myPassword = document.getElementById('password')
const output = document.querySelector('.output')


myForm.addEventListener("submit", myLogin)

function myLogin(e) {
    e.preventDefault();

    const userDetails = 
        {
            fullName: FullName.value,
            LastName: LastName.value,
            email: email.value,
            password: password.value
        }
    
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    if (FullName.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter Full Name</div>'
    }

    else if (LastName.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter Last Name</div>'
    }
    else if (myEmail.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter Email Address</div>'
    }
    else if (password.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter password</div>'
    }
    else{
        output.innerHTML = '<div class="alert alert-success" role="alert">Congratulations! You have successfully registered </div>'
        window.location.href="login.html"
    }
}