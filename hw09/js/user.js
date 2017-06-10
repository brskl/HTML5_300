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
    userLink.attributes["href"].value = "useraccount.html";
    userLink.innerHTML = "Some users name";
  } else {
    user = null;
    userLink.attributes["href"].value = "usersignin.html";
    userLink.innerHTML = "Sign In";
  }
}