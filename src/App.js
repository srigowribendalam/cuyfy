import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';
import AboutPage from './Components/About/AboutPage';
import ContactPage from './Components/Contact/ContactPage';
import HomePage from './Components/Home/HomePage';
import OurServicesPage from './Components/OurServices/OurServicesPage';
import PricingPage from './Components/Pricing/PricingPage';

function App() {
  return (
    <div >
     <Router>
     <Suspense fallback={<div>Loading...</div>}>
       <Route path='/' exact component={HomePage}/>
       <Route path='/ContactPage' exact component={ContactPage}/>
       <Route path='/PricingPage' exact component={PricingPage}/>
       <Route path='/About' exact component={AboutPage}/>
       <Route path='/OurServices' exact component={OurServicesPage}/>

       </Suspense>
     </Router>
    </div>
  );
}

export default App;
