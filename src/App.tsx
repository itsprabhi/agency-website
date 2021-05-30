import React, {useEffect, useState} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Teams from './pages/Teams';
import Work from './pages/Work';


import '../src/styles/global.css'
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';


function App() {

  const [isLoading, setIsLoading] = useState(true) 
  const preloader = isLoading ? <Preloader /> : <></>

  // useEffect(() => {
  //   setTimeout(()=> {
  //     setIsLoading(!isLoading)
  //   },1000)
  // },[])

  return (
    <div className="App">
      <Router>
      <Cursor />
        <Navbar />
        {/* {preloader} */}
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/work' component = {Work} />
          <Route path = '/team' component = {Teams} />
          <Route path="/:id" component = {Project} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
