import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Clock from "./pages/Clock";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Clock />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
