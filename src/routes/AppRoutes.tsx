// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Login/Login";
import { PATHS } from "../constants/paths";


const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route index element={<Navigate to={"/"}/>} /> */}
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={PATHS.LOGIN}/>}/>

        <Route element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;
