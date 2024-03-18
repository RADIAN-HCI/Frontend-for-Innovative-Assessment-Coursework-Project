import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountForm from "./components/Login/AccountForm";
import Assignments from "./components/Assignments";
import Generate from "./components/Generate/Generate";
import Design from "./components/Design/Design";
import BrainStorming from "./components/BrainStorming/BrainStorming";

function App() {
  const isLoggedIn = localStorage.getItem("username") !== null ? true : false;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AccountForm />} />
        <Route path="login" element={<AccountForm />} />
        {isLoggedIn ? (
          <>
            <Route path="assignments" element={<Assignments />} />
            <Route path="generate" element={<Generate />} />
            <Route path="design" element={<Design />} />
            <Route path="brainstorm" element={<BrainStorming />} />
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
