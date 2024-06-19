import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
