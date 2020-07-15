import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import './components/layouts/Navbar.css';
import './components/layouts/Footer.css';
// React Router Import
import { Switch, Route } from 'react-router-dom';
//Import Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Programs from "./components/pages/Programs";
import Mentor from './components/pages/Mentor';
import Resources from "./components/pages/Resources";
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Layout from './components/layouts/Layout';
import './components/pages/Pages.css';
import Banner  from './components/layouts/Banner';
import Bookshelf from './components/bookshelf';
import ScrollToTop from './components/layouts/Scroll';
import L2LandingPage from "./components/pages/L2LandingPage";
import Login1 from "./components/pages/Login1";


function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Banner/>
      <Layout>
        <Switch>
        <Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/programs' component={Programs} />
					<Route path='/resources' component={Resources} />
          <Route path='/mentor' component={Mentor} />
					<Route path='/contact' component={Contact} />
					<Route path='/login' component={Login} />
          <Route path='/l2landingpage' component={L2LandingPage} />
					{/* <Route path='/signup' component={Signup} /> */}
          <Route path='/bookshelf' component={Bookshelf} />
          <Route path='/login1' component={Login1} />
					<Route component={PageNotFound} />
          
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
