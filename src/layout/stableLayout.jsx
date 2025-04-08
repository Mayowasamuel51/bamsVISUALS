import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BgChange from "../components/bgChange";
import "../styles/home.css";
import { Outlet } from "react-router-dom"

const StableLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <BgChange />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default StableLayout;
