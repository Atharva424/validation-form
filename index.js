
document.querySelector('.formSubmit').addEventListener ('click' ,  (e)  => {

e.preventDefault();

const username = document.getElementById("username").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const password= document.getElementById("password").value;
const c_password = document.getElementById("confirmpassword").value;

// regularexpression

const usernameRegex = /^[A-za-z0-9 ]{3,20}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
const emailidRegex = /^([A-Za-z0-9])+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
const phoneRegex  = /^([8-9])+([\d]){9}$/;

// previousError

document.querySelectorAll('.error').forEach((curElement) => (curElement.textContent = ""))

// validateEmail

let isValid = true

if(!usernameRegex.test(username)){
document.getElementById('usernameError').textContent = "username is not valid"

isValid = false
}

if(!passwordRegex.test(password)){
    document.getElementById('passwordError').textContent = "Enter the password mixed of uppercase,small case,numbers & special character"
    
    isValid = false
    }

    if(!emailidRegex.test(email)){
        document.getElementById('emailError').textContent = "Please enter the valid email"
        
        isValid = false
        }

        if(!phoneRegex.test(phone)){
            document.getElementById('phoneError').textContent = "Please enter the valid mobile no"
        
            isValid = false
            }

            if (password != c_password){
                document.getElementById('confirmpasswordError').textContent = "password is not matching"
        
                isValid = false

            }

    let userData = []

if(isValid){

    let formClass = document.getElementsByClassName('form-control')
    Array.from(formClass).forEach((curElement)  => userData.push(curElement.value))
    Array.from(formClass).forEach((curElement)  => ( curElement.value = ""))
    console.log(userData);
    alert('registration Successful');

}
})

