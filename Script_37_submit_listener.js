
var form = document.querySelector("form");
var Name = form.querySelector('#name-input');
var email = form.querySelector('#email-input');
var password = form.querySelector('input[name=input-password]');


form.addEventListener("submit", function(event){

    event.preventDefault();

    var formInfo = {
        Name : Name.value,
        email : email.value,
        password : password.value
    };

    console.log(formInfo);
    console.log("Submitted");
    Name.value = "";
    email.value = "";
    password.value = "";
})