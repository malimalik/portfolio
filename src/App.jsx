import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer";
import Work from "./Components/Work/Work";
import Header from "./Components/Header";
import Agency from "./Components/Agency/Agency";
import "./App.css";
import Homepage from "./Components/Home/Homepage";

function App() {
  return (
    <>
      <Router>
        <div className="bg-amber-500 w-auto h-auto">
          <Header />
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/agency" element={<Agency />} />

          </Routes>
        </div>
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
