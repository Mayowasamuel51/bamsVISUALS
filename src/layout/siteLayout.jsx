import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
const SiteLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout