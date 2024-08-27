// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Exercise01 from "./exercises/exercise1/Exercise01";
import Exercise02 from "./exercises/exercise2/Exercise02";
import Exercise03 from "./exercises/exercise3/Exercise03";
import Exercise04 from "./exercises/exercise4/Exercise04";
import Exercise05 from "./exercises/exercise5/Exercise05";
import Exercise06 from "./exercises/exercise6/Exercise06";
import Exercise07 from "./exercises/exercise7/Exercise07";
import Exercise08 from "./exercises/exercise8/Exercise08";
import Exercise09 from "./exercises/exercise9/Exercise09";
import Exercise10 from "./exercises/exercise10/Exercise10";
import Exercise11 from "./exercises/exercise11/Exercise11";
import Exercise12 from "./exercises/exercise12/Exercise12";
import Exercise13 from "./exercises/exercise13/Exercise13";
import Exercise14 from "./exercises/exercise14/Exercise14";
import Exercise15 from "./exercises/exercise15/Exercise15";
import Exercise16 from "./exercises/exercise16/Exercise16";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise1" element={<Exercise01 />} />
          <Route path="/exercise2" element={<Exercise02 />} />
          <Route path="/exercise3" element={<Exercise03 />} />
          <Route path="/exercise4" element={<Exercise04 />} />
          <Route path="/exercise5" element={<Exercise05 />} />
          <Route path="/exercise6" element={<Exercise06 />} />
          <Route path="/exercise7" element={<Exercise07 />} />
          <Route path="/exercise8" element={<Exercise08 />} />
          <Route path="/exercise9" element={<Exercise09 />} />
          <Route path="/exercise10" element={<Exercise10 />} />
          <Route path="/exercise11" element={<Exercise11 />} />
          <Route path="/exercise12" element={<Exercise12 />} />
          <Route path="/exercise13" element={<Exercise13 />} />
          <Route path="/exercise14" element={<Exercise14 />} />
          <Route path="/exercise15" element={<Exercise15 />} />
          <Route path="/exercise16" element={<Exercise16 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
