import React from "react";
import ConnectModal from "./component/ConnectModal";

const App = () => {
  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
