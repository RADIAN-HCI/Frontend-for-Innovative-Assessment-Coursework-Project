import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountForm from "./components/AccountForm";
import Assignments from "./components/Assignments";
import Generate from "./components/Generate/Generate";
import Design from "./components/Design/Design";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AccountForm />} />
        <Route path="login" element={<AccountForm />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="generate" element={<Generate />} />
        <Route path="design" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
