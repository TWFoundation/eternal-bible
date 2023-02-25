import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./Login"));

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default RootRouter;
