var userSignin;
var userInfo;
var isEditUser = false;
var userTemplate = Handlebars.compile( $('#userTemplate').html());

function onLoadUserPage() {
  userSignin = document.getElementById("userSignin");
  userSignin = document.getElementById("userInfo");
  updateUserPage();
}


function updateUserPage() {
  if (user == null) {
    $('#userSignin').show()
    $('#userInfo').hide();
  } else {
    $('#userSignin').hide();
    $('#userInfo').show();
    // TODO: fill in userInfo form with data from user
   
    var data = { isEdit: isEditUser, user: user };
    var html = userTemplate(data);
    $('#userInfo').html(html);
  }
}

function onsubmitUserSignin(evt) {
  evt.preventDefault();
  
  var userId = document.formUserSignin.userId.value;
  var userPassword = document.formUserSignin.userPassword.value;

  console.log("User/password: " + userId + " " + userPassword);
  
  ecommAuthenticateUser(userId, userPassword);

  // hard-code user information. TODO: Try via AWS Cognito, look at info in cognitoUser
  user = new Object;
  user.name="Benjamin Sklar";
  user.userid="brskl";
  user.email="brskl@msn.com";
  user.address = new Object;
  user.address.line1="1111 First Avt.";
  user.address.city="Seattle";
  user.address.state="WA";
  user.address.zip="98105";
  
  sessionStorage["user"] = JSON.stringify(user);
  updateUserPage();
  loadUpdateUser();
}

function onClickUserEdit(evt) {
  isEditUser = true;
  updateUserPage();
  // TODO: Update item in AWS Table ecomm-Users
}

function onClickUserCancel(evt) {
  isEditUser = false;
  updateUserPage();
}

function onSubmitUserInfo(evt) {
  evt.preventDefault();

  user.name = $('#editUserName')[0].value;
  user.email = $('#editUserEmail')[0].value;
  user.address.line1 = $('#editUserAddressLine1')[0].value;
  user.address.city = $('#editUserAddressCity')[0].value;
  user.address.state = $('#editUserAddressState')[0].value;
  user.address.zip = $('#editUserAddressZip')[0].value;
  sessionStorage["user"] = JSON.stringify(user);
  isEditUser = false;
  updateUserPage();
  loadUpdateUser();
}