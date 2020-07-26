import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="Portfolio" component={Portfolio} />
          <Route exact path="Contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
