import './App.scss';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Contact from './contact/Contact';

function RouteScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash
      ? document.getElementById(decodeURIComponent(hash.slice(1)))
      : null;

    if (target) {
      window.scrollTo(0, Math.max(0, target.getBoundingClientRect().top + window.scrollY - 71));
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <RouteScrollHandler />

        <a className="fab-schedule" href="https://tidycal.com/scottcl" target="_blank" rel="noreferrer">
          <div className="fab-schedule-child">
            <i className="fas fa-calendar mr-2"></i>Schedule time with me!</div>
        </a>
        <Header />
        <main role="main">
          <div style={{ marginTop: "50px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;