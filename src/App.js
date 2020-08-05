import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';
// import Snowbird from "./images/snowbird.jpg";

function App() {
  return (
    // <div styles={{ backgroundImage:`url(${Snowbird})`, height: "100%" }}>
    <Router>
      <div>
      <Wrapper>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
    // </div>
  );
}

export default App;
