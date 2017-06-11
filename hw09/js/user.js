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
    userSignin.hide();
    userInfo.show();
  }
}