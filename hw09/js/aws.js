var awsIdentityPoolId = 'us-east-1:00bc38d6-c5d0-4cb8-879c-a5976a6a19b3';
var awsRegion = 'us-east-1';
var awsUserPoolId = 'us-east-1_Hjou7krpp';
var awsClientId = '5c2oc50r7adg25aqbe6heg7cjp';

AWS.config.region = awsRegion; // Region

// Cognito pool data
var cognitoPoolData = { UserPoolId : awsUserPoolId, ClientId : awsClientId };
var cognitoUserPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(cognitoPoolData);

function setAuthenticatedUserCredentials(jwtToken) {
  var params = {
    IdentityPoolId : awsIdentityPoolId,
    Logins : {
      'cognito-idp.us-east-1.amazonaws.com/us-east-1_Hjou7krpp' : jwtToken
    }
  };

  AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
}

function setUnauthenticatedUserCredentials() {
  var params = {
    IdentityPoolId: awsIdentityPoolId,
    };
  AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
}
