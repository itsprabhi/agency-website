import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/work' component = {Work} />
          <Route path = '/team' component = {Teams} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
