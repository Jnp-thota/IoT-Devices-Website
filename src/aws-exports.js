const awsconfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_J8O5zHE1t',
      userPoolClientId: '27q239umtvqko0308hou739c3o',
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
