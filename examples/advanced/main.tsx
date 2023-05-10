import "sanitize.css";
import "uno.css";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { StrictMode } from "react";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
AgoraRTC.setLogLevel(/* warning */ 2);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
