import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSearch from './components/NavSearchComponent.js'
import Home from './components/HomeComponent';
import Redeem from './components/RedeemComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SOCIALS } from './shared/socials';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: SOCIALS
    };
  }
  
  render() {
    return (
      <div className="App">
       
        <Router>
        <NavSearch />
        <Home  />
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/navsearch' component={NavSearch} />
              <Route path='/redeem' component={Redeem} />
          </Switch>
        </div>
      </Router>
        
      </div>
    );
  }
}
export default App;
