import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Learn from './Learn1';
import Test from './Test';
import Contact from './Contact';
import Results from './Results';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const style = {
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    color: "#e6e6e6",
    userSelect: "none",
  };
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
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/results" component={Results} />
            </Switch>
          </div>
          <div style={style}>&copy; 2022</div>
      </div>
    </Router>
  );
}

export default App;
