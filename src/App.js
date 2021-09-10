import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Ads from './component/Ads';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './component/Contact';
import Ads2 from './component/Ads2';
import Schools from './component/Schools';
import Uni from './component/Universities';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Ads} />
          <Route path="/contact" component={Contact} />
          <Route path="/page2" component={Ads2} />
          <Route path="/schools" component={Schools} />
          <Route path="/universities" component={Uni} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
