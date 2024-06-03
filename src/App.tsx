import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountForm from "./components/Login/AccountForm.tsx";
import Assignments from "./components/Assignments.tsx";
import Generate from "./components/Generate/Generate.tsx";
import Design from "./components/Design/Design.tsx";
import BrainStorming from "./components/BrainStorming/BrainStorming.tsx";
import React from "react";
import Ideas from "./components/Ideas/Ideas.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AccountForm />} />
        <Route path="login" element={<AccountForm />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="generate" element={<Generate />} />
        <Route path="design" element={<Design />} />
        <Route path="brainstorm" element={<BrainStorming />} />
        <Route path="ideas" element={<Ideas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
