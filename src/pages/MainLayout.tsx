import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* แสดง Pages ที่ตรงกับ Route */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
