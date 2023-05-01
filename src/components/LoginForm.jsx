import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "383c2abe-abb4-4596-ba68-83238c7199cb",
      "User-Name": userName,
      "User-Secret": password,
    };

    try {
      // userName | password => chatengine -> give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // Store userName and Password locally
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      // works out -> logged in
      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials");
      // error -> try with new userName
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Enter User Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Enter Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span> Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
