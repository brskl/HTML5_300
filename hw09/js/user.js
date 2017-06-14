// user.js

var user;
var cognitoUser;

// TODO: get info from cognitoUser and cognitoUser attributes
// userid = cognitoUser.username
// user phonenumber, cognitoUser.getUserAttributes()[phone_number]
// user e-mail, cognitoUser.getUserAttributes()[email]
// user name, add to cognitoUser attributes (see what other standard attributes are available)

function getCognitoUser() {
  cognitoUser = cognitoUserPool.getCurrentUser();
  if (cognitoUser != null) {
    cognitoUser.getSession(function(err, session) {
      if (err) {
        alert(err);
        return;
      }
      console.log('session validity: ' + session.isValid());
      setAuthenticatedUserCredentials(session.getIdToken().getJwtToken());
    });
  } else {
    setUnauthenticatedUserCredentials();
  }
}

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

  if (cognitoUser != null) {
    cognitoUser.signOut();
    cognitoUser = null;
  }

  setUnauthenticatedUserCredentials();

  sessionStorage.removeItem("user");
  loadUpdateUser();

  if (typeof onLoadUserPage != 'undefined') {
    onLoadUserPage();
  }
}

function ecommAuthenticateUser(usernameVal, passwordVal) {

    var authenticationData = {
        Username : usernameVal,
        Password : passwordVal
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

    var userData = {
        Username : usernameVal,
        Pool : cognitoUserPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            /*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
            console.log('idToken + ' + result.idToken.jwtToken);
            var temp = cognitoUserPool.getCurrentUser();
            setAuthenticatedUserCredentials(result.idToken.jwtToken);
            cognitoUser = cognitoUserPool.getCurrentUser();
        },

        onFailure: function(err) {
            alert(err);
        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            // User was signed up by an admin and must provide new
            // password and required attributes, if any, to complete
            // authentication.

            // userAttributes: object, which is the user's current profile. It will list all attributes that are associated with the user.
            // Required attributes according to schema, which don’t have any values yet, will have blank values.
            // requiredAttributes: list of attributes that must be set by the user along with new password to complete the sign-in.


            // Get these details and call
            // newPassword: password that user has given
            // attributesData: object with key as attribute name and value that the user has given.
            var newPassword = 'qwer1234';
            var attributesData = { name : userAttributes.name};
            cognitoUser.completeNewPasswordChallenge(newPassword, attributesData, this)
        }
    });
}

