import React from 'react'
import "./login.css"

function Login(props) {
    
    const isLoggedIn = props.login;
    if (isLoggedIn) {
      return  null
    }else {
    return (
        <div className="fullScreenLogin">
            <div className="codeInputWrap">
                <p>Bitte gebe deinen Zugangscode ein.</p>
                <input autocomplete="off" id="codeInput" type="text" placeholder="Code eingeben"></input>
                <button id="codeButton" onClick={props.onClick}>bestätigen</button>
            </div>
           

        </div>
    )
  }
}
export default Login