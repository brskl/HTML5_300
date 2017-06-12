// user.js

var user;


function loadUpdateUser() {
  if (!Modernizr.sessionstorage) {
    return;
  }

  var userLink = document.getElementById("user");
  var userLogout = document.getElementById("userLogout");

  var userStorage = sessionStorage["user"];
  if (userStorage) {
    user = JSON.parse(userStorage);
    userLink.innerHTML = user.name;
    userLogout.style.display = "inline";
  } else {
    user = null;
    userLink.innerHTML = "Sign In";
    userLogout.style.display = "none";
  }
}

function userLogout() {
  if (!Modernizr.sessionstorage) {
    return;
  }

  sessionStorage.removeItem("user");
  loadUpdateUser();
}

