import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import TempComponent from "./components/TempComponent";
import AccountForm from "./components/AccountForm";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<AccountForm />} />

        <Route path="login" element={<Signup />} />
        <Route path="signup" element={<Signup />} />
        <Route path="tempcomponent" element={<TempComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
