import './App.scss';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </div>
    );
  }
}

export default App;