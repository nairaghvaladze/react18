import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
   
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {loggedIn ? (
        <div className="centered-div">
          <div>
          <h2 >გამარჯობა! {email} </h2>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <button onClick={handleLogout} className="btn btn-primary">Logout</button>
          </div>
        </div>
      ) : (
        <div >
          <h2 className="text1">მთავარი გვერდი</h2>
          <h2 className="text1">გაიარეთ ავტორიზაცია!</h2>
          <div className="centered-div">
          <form  className="mt-3">
            
          <label>Email</label>
          <div >
            <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
           <label>Paassword</label>
          <div >
            <input className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleSignIn}>Sign In</button>
          </form>
          </div> 
        </div>
      )}
    </div>
  );
};

export default Login;
