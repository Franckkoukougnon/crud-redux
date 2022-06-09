import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../Utils/firebase.config";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [erro2, setError2] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError2(true);
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <h3> Se connecter</h3>
        <form className="form-login" onSubmit={(e) => handleLogin(e)}>
          <input
            type="email"
            placeholder="Votre email"
            required
            ref={loginEmail}
          />
          <input
            type="password"
            placeholder="Votre mot de passe "
            required
            ref={loginPassword}
          />
          <input type="submit" value="Se connecter" />
          <span>{erro2 && "erreur mot de passe ou email"}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
