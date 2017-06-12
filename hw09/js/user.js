// user.js

var user;


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
}

