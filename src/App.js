import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, // Import Routes
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (  
      <div>
        <Router>
          <NavBar />
          <News pagesize={5} country="in" category="general" />
          <Routes>
            <Route path="/business" element={<News keys="business" pagesize={5} country="in" category="business" />} />
            <Route path="/entertainment" element={<News keys="entertainment" pagesize={5} country="in" category="entertainment" />} />
            <Route path="/general" element={<News keys="general" pagesize={5} country="in" category="general" />} />
            <Route path="/health" element={<News keys="health" pagesize={5} country="in" category="health" />} />
            <Route path="/science" element={<News keys="science" pagesize={5} country="in" category="science" />} />
            <Route path="/technology" element={<News keys="technology" pagesize={5} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
