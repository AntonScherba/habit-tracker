import { createContext, ReactElement, useState, useContext } from 'react';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  ICognitoUserPoolData,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

interface ICredentials {
  email: string;
  password: string;
}

interface IConfirmation {
  email: string;
  code: string;
}

interface AuthContextType {
  userToken: string;
  login: (credentials: ICredentials, callback: VoidFunction) => void;
  signUp: (credentials: ICredentials, callback: VoidFunction) => void;
  confirmSignUp: (confirmation: IConfirmation, callback: VoidFunction) => void;
  resendConfirmationCode?: VoidFunction;
  logout: (callback: VoidFunction) => void;
  forgotPassword?: VoidFunction;
  changePassword?: VoidFunction;
  deleteUser?: VoidFunction;
}

const poolData: ICognitoUserPoolData = {
  UserPoolId: 'eu-central-1_gHwMlzeVm',
  ClientId: '45a9e26mgvum0uu3k6ugubb2k7',
};

const UserPool = new CognitoUserPool(poolData);

const getUserToken = () => {
  let userToken = '';

  UserPool.getCurrentUser()?.getSession(
    (err: any, session: CognitoUserSession) => {
      if (err) {
        console.error(err);
        return;
      }

      userToken = session.getIdToken().getJwtToken();
    }
  );

  return userToken;
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [userToken, setUserToken] = useState<string>(() => getUserToken());

  const signUp = (
    { email, password }: ICredentials,
    callback: VoidFunction
  ): void => {
    const attributeList: CognitoUserAttribute[] = [];

    const attribute = new CognitoUserAttribute({
      Name: 'email',
      Value: email,
    });

    attributeList.push(attribute);

    UserPool.signUp(email, password, attributeList, [], (err, data) => {
      if (err) {
        console.error(err);
      } else {
        callback();
      }
    });
  };

  const confirmSignUp = (
    { email, code }: IConfirmation,
    callback: VoidFunction
  ) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    cognitoUser.confirmRegistration(code, true, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        callback();
      }
    });
  };

  const login = ({ email, password }: ICredentials, callback: VoidFunction) => {
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (session: CognitoUserSession) => {
        setUserToken(session.getIdToken().getJwtToken());
        callback();
      },
      onFailure: (err: any) => {
        console.error(err);
      },
    });
  };

  const logout = (callback: VoidFunction) => {
    const cognitoUser = UserPool.getCurrentUser();

    cognitoUser?.signOut(() => {
      setUserToken(getUserToken());
      callback();
    });
  };

  const value = { userToken, signUp, confirmSignUp, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
