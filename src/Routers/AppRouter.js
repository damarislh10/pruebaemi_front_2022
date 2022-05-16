import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
