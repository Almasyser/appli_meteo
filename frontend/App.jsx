import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Home=lazy(()=> import("./pages/Home"));
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
export default App
