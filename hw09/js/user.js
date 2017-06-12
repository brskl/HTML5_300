// user.js

var user;
var userSignin;
var userInfo;

function loadUpdateUser() {
  if (!Modernizr.sessionstorage) {
    return;
  }

  var userLink = document.getElementById("user");

  var userStorage = sessionStorage["user"];
  if (userStorage) {
    user = JSON.parse(userStorage);
    userLink.innerHTML = user.name;
  } else {
    user = null;
    userLink.innerHTML = "Sign In";
  }

  userSignin = document.getElementById("userSignin");
  if (userSignin != null) {
    // on user.html
    userSignin = document.getElementById("userInfo");
    UpdateUserPage();
  }
}

function UpdateUserPage() {
  if (user == null) {
    $('#userSignin').show()
    $('#userInfo').hide();
  } else {
    $('#userSignin').hide();
    $('#userInfo').show();
    // TODO: fill in userInfo form with data from user
    // TODO: replace w/ template for isEdit=false/true
    var userInfoString = user.id + "<br>" + user.name + "<br>" + user.address.line1 + "&nbsp;" + user.address.city + "&nbsp;" + user.address.zip; 
    $('#userInfo').html(userInfoString);
  }
}

function onsubmitUserSignin(evt) {
  evt.preventDefault();
  
  var userId = document.formUserSignin.userId.value;
  var userPassword = document.formUserSignin.userPassword.value;

  console.log("User/password: " + userId + " " + userPassword);
  
  // hard-code user information. TODO: Try via AWS Cognito
  user = new Object;
  user.name="Benjamin Sklar";
  user.id="brskl";
  user.email="brskl@msn.com";
  user.address = new Object;
  user.address.line1="1111 First Avt.";
  user.address.city="Seattle";
  user.address.state="WA";
  user.address.zip="98105";
  
  sessionStorage["user"] = JSON.stringify(user);
}