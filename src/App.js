import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './component/Contact';
import Ads from './component/Ads';
import Ads2 from './component/Ads2';
import Ads3 from './component/Ads3';
import Schools from './component/Schools';
import Uni from './component/Universities';
import PastPprs from './component/PastPaper';
import Home from './component/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutors-page1" component={Ads} />
          <Route path="/contact" component={Contact} />
          <Route path="/tutors-page2" component={Ads2} />
          <Route path="/tutors-page3" component={Ads3} />
          <Route path="/internaional-schools" component={Schools} />
          <Route path="/universities" component={Uni} />
          <Route path="/past-papers" component={PastPprs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
