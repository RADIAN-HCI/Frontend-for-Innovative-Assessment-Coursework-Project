import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountForm from "./components/Login/AccountForm";
import Assignments from "./components/Assignments";
import Generate from "./components/Generate/Generate";
import Design from "./components/Design/Design";
import BrainStorming from "./components/BrainStorming.js/BrainStorming";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
