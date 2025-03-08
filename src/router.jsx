import {
    createBrowserRouter,
} from "react-router-dom";
import SiteLayout from "./layout/siteLayout";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import About from "./pages/about";
import NewSiteLayout from "./layout/newSiteLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <NewSiteLayout />,
        children : [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
        ]
    },
]);

export default router;