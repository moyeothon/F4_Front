// Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Create from "@pages/create/Create";
import Invite from "@pages/invite/Invite";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
