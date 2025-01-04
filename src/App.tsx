import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

import OCConnectWrapper from "./layouts/OCConnectWrapper";
import CreateQuiz from "./pages/CreateQuiz";

import Questions from "./pages/Questions";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div>
      <OCConnectWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/redirect" element={

            <CreateQuiz />

          } />
          <Route path="/questions" element={<Questions />} />
          <Route path="/userPage/:id" element={<UserPage />} />
        </Routes>
      </OCConnectWrapper>
    </div>
  );
}

export default App;
