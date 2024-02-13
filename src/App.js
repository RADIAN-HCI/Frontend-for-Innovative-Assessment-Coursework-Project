import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountForm from "./components/AccountForm";
import Assignments from "./components/Assignments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AccountForm />} />
        <Route path="login" element={<AccountForm />} />
        <Route path="assignments" element={<Assignments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
