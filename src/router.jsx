import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home"
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import About from "./pages/about";
import StableLayout from "./layout/stableLayout";



const router = createBrowserRouter([
    {
       path:"/",
       element:<StableLayout/>,
       children:[
        {
            index: true,
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "gallery",
            element: <Gallery />
        },
        {
            path:"contact",
            element:<Contact/>
        }
       ]
    },
]);

export default router;