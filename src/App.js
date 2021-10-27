import React from 'react';
import './styles/globalStyles.css'
import './styles/index.css'
import './styles/responsive.css'
import {
  BrowserRouter as Router,
  // Route,
  Switch,
} from "react-router-dom";
import WithLoader from './layout/WithLoader';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import { Route } from './router'


function App() {

  return ( 
    <>
     <Router>

      <Switch>
        
         {/* application pages with preloader before routing */}
          <WithLoader loadableComponent={ <Home /> } path={ Route.home } />
          {/* <WithLoader loadableComponent={ <About /> } path={ Route.about } />
          <WithLoader loadableComponent = { <Courses /> } path={ Route.courses } /> */}
      </Switch>
      </Router>
      </>
  );
}

export default App;
