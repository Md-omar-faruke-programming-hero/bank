// submit button for login in index.html

document.getElementById('submit').addEventListener('click',function(){

    const email= document.getElementById('userEmail');
    const password= document.getElementById('userPassword');

    var userEmail= email.value;
    var userPassword=password.value;

    if(userEmail== "omar" && userPassword=="123"){
        window.location.href= "banking.html";
    }
    else{
        console.log(alert("email :omar & password:123"));
    }

    email.value="";
    password.value="";
});





