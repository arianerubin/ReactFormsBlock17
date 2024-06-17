import { useState } from "react";
import "./App.css";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";

function App() {
  const [token, setToken] = useState(" ");
  return (
    <div>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App;
