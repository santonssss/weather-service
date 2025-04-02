import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";

const App = () => {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
    </Routes>
  );
};

export default App;
