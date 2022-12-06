import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-central-1_gb9psissC',
  ClientId: '5gtkiqkpf0betc35gjnsi92q4q',
};

export default new CognitoUserPool(poolData);
