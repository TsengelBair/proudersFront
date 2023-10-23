import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Authorization from "./components/Authorization.js";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Authorization />} />
        {/* Установите авторизацию как маршрут по умолчанию */}
        <Route path="/*" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;
