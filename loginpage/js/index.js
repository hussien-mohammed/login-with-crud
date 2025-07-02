// storge info ----------------
var regasterEmail = document.getElementById("regasterEmail");
var regasterPassword = document.getElementById("regasterPassword");
var userName = document.getElementById("userName");
var newemail = document.getElementById("newemail");
var newPassword = document.getElementById("newPassword");

var emailregx = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
var passwordregx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

var sighnUpUseres = [];

if (localStorage.getItem("sighnUpUseres") != null) {
  sighnUpUseres = JSON.parse(localStorage.getItem("sighnUpUseres"));
}

// buttn function ---------------
function login(event) {
  event.preventDefault();
  signRegister();
}

function sinup(event) {
  event.preventDefault();
  singnup();
}
// ---------end buttn

// ------------sin for new user function---------
function singnup() {
  var email = newemail.value.trim();
  var password = newPassword.value.trim();
  var name = userName.value.trim();

  if (!emailregx.test(email)) {
    alert("Invalid email");
    return;
  }

  if (!passwordregx.test(password)) {
    alert("Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be at least 6 characters");
    return;
  }

  var exists = sighnUpUseres.some(function(user) {
    return user.email === email;
  });

  if (exists) {
    alert("already this email signed");
    return;
  }

  var userInfo = {
    email: email,
    password: password,
    Name: name,
  };

  sighnUpUseres.push(userInfo);
  localStorage.setItem("sighnUpUseres", JSON.stringify(sighnUpUseres));
  alert("you can now register");
}

// ------------sign in function---------
function signRegister() {
  var email = regasterEmail.value.trim();
  var password = regasterPassword.value.trim();
  var savedUsers = JSON.parse(localStorage.getItem("sighnUpUseres")) || [];

  var foundUser = savedUsers.find(function(user) {
    return user.email === email;
  });

  if (!email || !password) {
    alert("Please fill all fields.");
  } else if (!foundUser) {
    alert("Wrong email");
  } else if (foundUser.password !== password) {
    alert("Wrong password");
  } else {
    alert("Welcome " + foundUser.Name);
    location.href = "../crud/crud.html";
  }
}

//    var foundUser = savedUsers.find(function(user) {
//     return user.email === email && user.password === password;
//   });
// if (!foundUser ) {
//   alert("Wrong email");
// } 
// else if (foundUser.password !== password ) {
//   alert("Wrong password");
// } 
// else {
//   alert("Welcome " + foundUser.name);
//   location.href = "../crud/crud.html";
// }
  //   if (foundUser) {
  //   // alert("Welcome, " + foundUser.Name);
  //   location.href = "../crud/crud.html"
  //   // not secure to tell Incorrect email is mean password is sign for diffrent email 
  // } else if(foundUser.email === email&&foundUser.password !== password){
  //   alert(" Incorrect password ");
  // }
  // else if (foundUser.email === !email){

  //   alert(" Incorrect email ");
  // }
