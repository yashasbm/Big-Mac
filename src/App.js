import React from 'react';
import './App.css';
import Home from './container/pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
