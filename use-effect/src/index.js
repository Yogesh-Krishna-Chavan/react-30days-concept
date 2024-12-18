import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Memo from "./Memo";
import UseMemoEx from "./useMemoEx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Memo /> */}
    <UseMemoEx />
  </React.StrictMode>
);
