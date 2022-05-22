import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Learn from './Learn1';
import Test from './Test';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">   
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/learn-setup" component={Learn.LearnSetup} />
              <Route exact path="/test" component={Test} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
