import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import { Config } from "./pages/config";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/config" element={<Config />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
