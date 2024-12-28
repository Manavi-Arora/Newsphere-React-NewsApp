import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update to 'react-router-dom'
import LoadingBar from "react-top-loading-bar";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(10);
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Routes>
          {/* Define a route for each category */}
          <Route path="/sports" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="sports" />} />
          <Route path="/science" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="science" />} />
          <Route path="/technology" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="technology" />} />
          <Route path="/business" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="business" />} />
          <Route path="/entertainment" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="entertainment" />} />
          <Route path="/health" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="health" />} />
          
          {/* Default route (e.g., if no category is selected) */}
          <Route path="/" element={<News apiKey = {apiKey} setProgress = {setProgress} country="us" category="general" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
