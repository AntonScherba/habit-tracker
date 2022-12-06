import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import './App.css';
import Default from './components/Layouts/Default/Default';
import UserPool from './UserPool';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConfirmed, setConfirmation] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const register = (event: React.FormEvent) => {
    event.preventDefault();

    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    );

    UserPool.signUp(username, password, attributeList, [], (err, data) => {
      if (err) {
        console.error(err);
        alert("Couldn't sign up");
      } else {
        console.log(data);
        setConfirmation(true);
        alert('User Added Successfully');
      }
    });
  };

  const confirm = (event: React.FormEvent) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    user.confirmRegistration(confirmationCode, true, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't verify account");
      } else {
        console.log(data);
        alert('Account verified successfully');
      }
    });
  };

  const login = (event: React.FormEvent) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('login success', result);
      },
      onFailure: (err) => {
        console.log('login failure', err);
      },
      newPasswordRequired: (data) => {
        console.log('new password required', data);
      },
    });
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    user?.signOut();
  };

  const signUpForm = (
    <form onSubmit={register}>
      <div className="mb-4">
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="password"
        >
          password
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="***************"
        />
      </div>
      <button type="submit" className="w-full bg-blue-400 py-2 px-4">
        Sign up
      </button>
    </form>
  );

  const confirmForm = (
    <form onSubmit={confirm}>
      <div className="mb-4">
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="confirm"
        >
          Confirm
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setConfirmationCode(e.target.value)}
          value={confirmationCode}
          type="number"
          name="confirm"
          id="confirm"
        />
      </div>

      <button type="submit" className="w-full bg-blue-400 py-2 px-4">
        Confirm
      </button>
    </form>
  );

  return (
    <Default>
      <div className="w-96">
        {isConfirmed ? confirmForm : signUpForm}

        <form onSubmit={login}>
          <div className="mb-4">
            <label
              className="mb-2 block cursor-pointer text-sm text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full border py-2 px-3 text-gray-700"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block cursor-pointer text-sm text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border py-2 px-3 text-gray-700"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block cursor-pointer text-sm text-gray-700"
              htmlFor="password"
            >
              password
            </label>
            <input
              className="w-full border py-2 px-3 text-gray-700"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="***************"
            />
          </div>
          <button type="submit" className="w-full bg-blue-400 py-2 px-4">
            Login
          </button>
        </form>

        <button
          type="button"
          className="w-full bg-blue-400 py-2 px-4"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </Default>
  );
}

export default App;
