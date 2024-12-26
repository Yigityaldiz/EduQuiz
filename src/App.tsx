import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import { useNavigate } from "react-router-dom";
// import { LoginCallBack } from '@opencampus/ocid-connect-js';
import OCConnectWrapper from "./layouts/OCConnectWrapper";
import CreateQuiz from "./pages/CreateQuiz";
import UserLoginPage from "./pages/UserLogin";

function App() {



  return (
    <div>
      <OCConnectWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redirect" element={ <CreateQuiz /> }
/>
        </Routes>
      </OCConnectWrapper>
    </div>
  );
}

export default App;
