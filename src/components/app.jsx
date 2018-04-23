import React, { Component } from "react";
import Weather from "./weather";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {




  render() {
    return (
      <Router>
        <div className='d-flex justify-content-center'>
    
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/weather" component={Weather} />
        </Switch>
        </div>
      </Router>

    );
  }
}

export default App;


//    <Link className="btn btn-info mr-4 mt-2" to="/">Go Home</Link>