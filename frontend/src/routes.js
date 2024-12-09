import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import Layout from "./layout/Layout";

// const routes = [
//         { path:'/', component:HomePage },
//         { path:'/about', component:AboutPage },
//         { path:'/project', component:ProjectPage },
//         { path:'/contact', component:ContactPage },
//     ];
const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [ 
        { 
            path: '/', 
            element: <HomePage />, 
            children: [
                { index: true, element: <AboutPage /> }, 
                { path: 'about-me', element: <AboutPage/> },
                { path: 'skills', element: <SkillsPage/> },
                { path: 'projects', element: <ProjectPage/> },
            ]
        }
      ],
    },
    {
      path: 'contact',
      element: <Layout />,
      children: [ 
        { 
            path: '/contact', 
            element: <ContactPage />, 
            children: [
                { index: true, element: <AboutPage /> }, 
                { path: 'about-me', element: <AboutPage/> },
                { path: 'skills', element: <SkillsPage/> },
                { path: 'projects', element: <ProjectPage/> },
            ]
        }
      ],
    }
  ];

export default routes;