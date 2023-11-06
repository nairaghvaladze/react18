import React from "react";
import Login from "./Login";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
          
          <Login />
        </div>
      );
    }

var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)
