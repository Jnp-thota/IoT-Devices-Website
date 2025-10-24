const awsconfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_2rth3G4Oo',
      userPoolClientId: '3gg7fjugc54hoc7agjj5noefdo',
      region: 'us-east-1',
      loginWith: {
        email: true,
        // Optional: enable social providers
        // oauth: {
        //   domain: 'your-domain.auth.us-east-1.amazoncognito.com',
        //   scopes: ['email', 'openid', 'profile'],
        //   redirectSignIn: ['http://localhost:5173/'],
        //   redirectSignOut: ['http://localhost:5173/'],
        //   responseType: 'code'
        // }
      }
    }
  }
};

export default awsconfig;
