import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// const queryClient = new QueryClient();

// optional configuration
// const options = {
//   // you can also just use 'bottom center'
//   position: positions.TOP_CENTER,
//   timeout: 5000,
//   offset: "30px",
//   // you can also just use 'scale'
//   transition: transitions.SCALE,
// };

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
