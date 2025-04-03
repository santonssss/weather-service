import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
    </Routes>
  );
};

export default App;
