import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";

import "./shared/style.scss";

ReactDOMClient.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
