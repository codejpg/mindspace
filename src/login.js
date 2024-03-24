import React, { useEffect } from "react";
import "./login.css";
import Logo from "./img/logo.svg";

function Login({ login: isLoggedIn, onClick }) {
  if (isLoggedIn) {
    return null;
  }else {
    return (
      <div className="fullScreenLogin">
        <div className="codeInputWrap">
          <img src={Logo} width="300px"></img>
          <p>Bitte gebe deinen Zugangscode ein.</p>
          <input
            autocomplete="off"
            id="codeInput"
            type="text"
            placeholder="Code eingeben"
          ></input>
          <input
            autocomplete="off"
            id="nameInput"
            type="text"
            placeholder="Name"
          ></input>
          <button id="codeButton" onClick={onClick}>
            bestätigen
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
