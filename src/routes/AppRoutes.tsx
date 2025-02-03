import { Routes, Route, Navigate } from "react-router-dom";
import { PATHS } from "../constants/paths";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../layouts/MainLayout";


const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route index element={<Navigate to={"/"}/>} /> */}
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.REGISTER} element={<Register />} />
        <Route path="*" element={<Navigate to={PATHS.LOGIN}/>}/>

        <Route element={<MainLayout/>}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;
