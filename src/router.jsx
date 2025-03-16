import {
    createBrowserRouter,
} from "react-router-dom";
import SiteLayout from "./layout/siteLayout";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import About from "./pages/about";
import NewSiteLayout from "./layout/newSiteLayout";
import StableLayout from "./layout/stableLayout";



const router = createBrowserRouter([
    {
       path:"/",
       element:<StableLayout/>
    },
    {
        path:"/gallery",
        element:<Gallery/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }

   
        

]);

export default router;


     // path: "/",
        // element: <NewSiteLayout />,
        // children : [
        //     {
        //         index: true,
        //         element: <Home />,
        //     },
        //     {
        //         path: "/gallery",
        //         element: <Gallery />
        //     },
        //     {
        //         path: "/contact",
        //         element: <Contact />
        //     },
        //     {
        //         path: "/about",
        //         element: <About />
        //     },