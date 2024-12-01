import React from 'react';
import {BrowserRouter as Router, Routes, Route,useRoutes} from 'react-router-dom'
import Navbar from './components/Navabr';
import routes from './routes';

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     {routes.map(
    //       (route,index)=>(
    //           <Route key={index} path={route.path} element={<route.component/>}/>
    //         )
    //       )
    //     }
    //   </Routes>
    // </Router>
  );
}

export default App;
