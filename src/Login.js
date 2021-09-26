import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfS36rR7E4TyQiR1TN9Nmkd+AdomCAkhPFt9et+dERBpAQGghIMcMM7jiZzU5ZE0kU7tmLSfMhOWg=="
          alt="kalapila logo"
        />
        <div className="login__text">
          <h1>Sign in to Kalapila</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
