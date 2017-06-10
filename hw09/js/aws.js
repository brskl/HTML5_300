// Initialize the Amazon Cognito credentials provider
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:00bc38d6-c5d0-4cb8-879c-a5976a6a19b3',
  });