import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostAd from './component/PostAd';
import Ads from './component/Ads';
import Ads2 from './component/Ads2';
import Ads3 from './component/Ads3';
import Schools from './component/Schools';
import Uni from './component/Universities';
import PastPprs from './component/PastPaper';
import Home from './component/Landing';
import Contact from './component/ContactUs';
import Student from './component/StudentForum';
import About from './component/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutors" component={Ads} />
          <Route path="/post-ad" component={PostAd} />
          <Route path="/tutors/page2" component={Ads2} />
          <Route path="/tutors/page3" component={Ads3} />
          <Route path="/internaional-schools" component={Schools} />
          <Route path="/universities" component={Uni} />
          <Route path="/past-papers" component={PastPprs} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/student-forum" component={Student} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
