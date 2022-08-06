import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";

const PublicRoutes = [
    {name: "Home", path: "/", Element: Home},
    {name: "About", path: "/about", Element: About},
    {name: "Services", path: "/services", Element: Services},
    {name: "Contact", path: "/contact", Element: Contact},
];

export default PublicRoutes;