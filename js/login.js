let emailInp = document.getElementById('email');
let passwordInp = document.getElementById('password');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let loginBtn = document.getElementById('login-btn');
let userdata = JSON.parse(localStorage.getItem('userdata')) || [];
console.log(userdata);
loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let email = emailInp.value.trim();
    let password = passwordInp.value.trim();
    let user = userdata.find(u => u.email === email && u.password === password);
    if(user){
        console.log("Login success");
        document.getElementById("account-t").style.display="block"
        window.location.href="index.html"
    }else{
        console.log("Email or password wrong");
    }
});