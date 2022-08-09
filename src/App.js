import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quote';
import NavBar from './components/navbar';
import Home from './components/Home';
import './components/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
