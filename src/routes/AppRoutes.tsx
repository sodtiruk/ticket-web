// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route index element={<Navigate to={"/"}/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={"/login"}/>}/>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;
