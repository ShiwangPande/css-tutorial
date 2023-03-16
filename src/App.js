import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/Introduction';
import Syntax from './pages/Syntax';
import AddCss from './pages/AddCss';
import Color from './pages/Color';
import Border from './pages/Border';
import Margin from './pages/Margin';
import Display from './pages/Display';
import Position from './pages/Position';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Intro} />
          <Route path='/Syntax' component={Syntax} />
          <Route path='/addCss' component={AddCss} />
          <Route path='/color' component={Color} />
          <Route path='/border' component={Border} />
          <Route path='/margin' component={Margin} />
          <Route path='/display' component={Display} />
          <Route path='/position' component={Position} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
