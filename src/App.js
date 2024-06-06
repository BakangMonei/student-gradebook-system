import { lazy } from "react";
import {
  BrowserRouter as Router,
  Route, Routes, Navigate,
} from "react-router-dom";
import './App.css';
import SplashScreen from "./frontend/layouts/SplashScreen";
import LoginPage from "./frontend/layouts/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
