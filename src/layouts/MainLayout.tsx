import { Outlet } from "react-router-dom";
import HeaderTest from "../components/Header/Header";
import FooterTest from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <HeaderTest />
      <main>
        <Outlet /> {/* แสดง Pages ที่ตรงกับ Route */}
      </main>
      <FooterTest />
    </div>
  );
};

export default MainLayout;
