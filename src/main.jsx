import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // 루트 컴포넌트 App을 Provider로 wrapping 처리

  <App />

  // </StrictMode>
);
