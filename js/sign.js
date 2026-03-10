let userNameInp = document.getElementById('username');
let emailInp = document.getElementById('email');
let passwordInp = document.getElementById('password');
let confirmPasswordInp = document.getElementById('confirm-password');
let signInBtn = document.getElementById('sign-btn');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let usernameError = document.getElementById('username-error');
let confirmPasswordError = document.getElementById('confirm-password-error');

if (localStorage.getItem('userdata')) {
        userdata = JSON.parse(localStorage.getItem('userdata'));
}else{
        userdata = [];
        localStorage.setItem('userdata', JSON.stringify(userdata));
    }
console.log(userdata);

signInBtn.addEventListener('click', function() {
    
    let newUser = {
        username: userNameInp.value,
        email: emailInp.value,
        password: passwordInp.value,
        confirmPassword: confirmPasswordInp.value
    };


    let num= 0;
    console.log('Button clicked');
    console.log(userNameInp.value);
    console.log(emailInp.value);
    console.log(passwordInp.value);
    console.log(confirmPasswordInp.value);
    let userRegex = /^[a-zA-Z0-9]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (newUser.username === '' || newUser.email === '' || newUser.password === '') {
        document.getElementById('general-error').style.display = 'block';

    }else{
        document.getElementById('general-error').style.display = 'none';
        if (!userRegex.test(newUser.username)) {
        usernameError.style.display = 'block';
        } else{
            usernameError.style.display = 'none';
            num++;
        }
        if (!emailRegex.test(newUser.email)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
            num++;
        }
        if (!passwordRegex.test(newUser.password)) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
            num++;
        }
        if (newUser.password !== newUser.confirmPassword) {
            confirmPasswordError.style.display = 'block';
        } else {
            confirmPasswordError.style.display = 'none';
            num++;
        }
        if (num === 4) {
            document.getElementById('success-message').style.display = 'block';
            userdata.push(newUser);
            localStorage.setItem('userdata', JSON.stringify(userdata));
            console.log(userdata);
            window.location.href = 'login.html';
        } else {
            document.getElementById('success-message').style.display = 'none';
            document.getElementById('general-error').style.display = 'block';
        }                       

    }
    



})