import './App.scss';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Header from './shared/Header';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import LightMode from './shared/LightMode';
import Footer from './shared/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ marginTop: "50px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;