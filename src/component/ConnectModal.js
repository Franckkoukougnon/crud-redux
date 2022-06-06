import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: signUp ? "rgb(28,28,28)" : "rga(83,83,83)" }}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: signUp ? "rgb(83,83,83)" : "rga(28,28,28)" }}
          onClick={() => setSignUp(false)}
        >
          Connecter
        </button>
      </div>
      {signUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
