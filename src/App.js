import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostAd from './component/PostAd';
import Ads from './component/Ads';
import Home from './component/Landing';
import About from './component/About';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutors/page1" component={Ads} />
          <Route path="/post-ad" component={PostAd} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
