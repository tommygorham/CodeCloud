import React from "react";
import ReactDOM from "react-dom";
import './fontawesome-all.min.css';
import App from "./App";
import Firebase, { FirebaseContext } from "./api";


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
   <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
