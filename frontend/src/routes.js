import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProjectPage from "./pages/ProjectPage";

const routes = [
        { path:'/', component:HomePage },
        { path:'/about', component:AboutPage },
        { path:'/project', component:ProjectPage },
        { path:'/contact', component:ContactPage },
    ];

export default routes;