import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/MainLayout";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import ProfilePage from "./profile/profilePage";

import FixturePage from "./pages/fixtures/fixturePage";
import PredictMatch from "./pages/fixtures/predict";
import UserSubmission from "./pages/leaderboard/UserSubmission";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainLayout />}></Route>

          <Route exact path="/board" element={<Leaderboard />}></Route>
          <Route exact path="/profile" element={<ProfilePage />}></Route>

          <Route exact path="/fixtures" element={<FixturePage />}></Route>
          <Route
            exact
            path="/fixtures/:matchId"
            element={<PredictMatch />}
          ></Route>
          <Route exact path="/user" element={<UserSubmission />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;