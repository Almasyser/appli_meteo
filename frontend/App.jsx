import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Stats from "./pages/statistiques/Stats";
// const Home=lazy(()=> import("./pages/Home"));
function App() {
  
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="*" element={<Navigate to="/home"/>} />
    </Routes>
  )
}
export default App
