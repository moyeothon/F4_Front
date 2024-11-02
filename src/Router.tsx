// Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Create from "@pages/create/Create";
import Test from "@pages/test/Test";
import Invite from "@pages/invite/Invite";
import Result from "@pages/result/Result";
import Confirm from "@pages/confirm/Confirm";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/test/:page" element={<Test />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/result" element={<Result />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
