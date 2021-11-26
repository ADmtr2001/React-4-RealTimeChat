import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCXZpPj7u-8Rxzp33efs9CLpZrTXP2X4YY",
  authDomain: "chat-react-bab57.firebaseapp.com",
  projectId: "chat-react-bab57",
  storageBucket: "chat-react-bab57.appspot.com",
  messagingSenderId: "691219591348",
  appId: "1:691219591348:web:536b2ade67d1df6f1927e1",
});

export const Context = React.createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
