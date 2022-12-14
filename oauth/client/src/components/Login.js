import React from "react";
import { GoogleLogin } from "react-google-login";

//const API_KEY = process.env.REACT_APP_MY_KEY;
//const API_KEY2 = process.env.REACT_APP_MY_KEY;

const Login = () => {
  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";
  const onSuccess = (res) => {
    console.log("login success", res);
    alert(`Welcome ${res.profileObj.name}`);
    localStorage.setItem("profile", JSON.stringify({ res }));
  };
  const onFailure = (res) => {
    console.log("login failed", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
};

export default Login;
