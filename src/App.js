import "./styles.css";
import BillDetail from "./BillDetail";
import React, { useState } from "react";
import Login from "./Login";
import { Dashboard } from "./Dashbord";

export default function App() {
  const [loginToken, setLoginToken] = useState(localStorage.getItem('userToken'));

  const setAccessToken = (token) => {
    localStorage.setItem('userToken', token);
    setLoginToken(token);
  }

  const removeAccessToken = () => {
    localStorage.removeItem('userToken');
    setLoginToken();
  }

  return (
    <div>
      {!loginToken && <Login setAccessToken={setAccessToken}/>}
      {loginToken && <Dashboard removeAccessToken={removeAccessToken}/>}
    </div>
  );
}
