import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BgChange from "../components/bgChange";
import "../styles/home.css";
import { Outlet } from "react-router-dom"

const StableLayout = () => {
  return (
    <>
      <Navbar />
      <BgChange />
      <Outlet />
      <Footer />
    </>
  );
};

export default StableLayout;
