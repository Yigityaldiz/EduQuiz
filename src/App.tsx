import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { LoginCallback } from "@opencampus/ocid-connect-js";
import OCConnectWrapper from "./layouts/OCConnectWrapper";

function App() {

  const navigate = useNavigate();

  const loginSuccess = () => {
    console.log("Login success");
    navigate("/");
  };
  const loginError = () => {
    console.log("Login error");
  };

  return (
    <div>
      <OCConnectWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/redirect"
            element={
              <LoginCallback
                errorCallback={loginError}
                successCallback={loginSuccess}
              />
            }
          />
        </Routes>
      </OCConnectWrapper>
    </div>
  );
}

export default App;
