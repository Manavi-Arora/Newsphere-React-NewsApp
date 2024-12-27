import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update to 'react-router-dom'
import LoadingBar from "react-top-loading-bar";

function App() {
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
          <Route path="/sports" element={<News setProgress = {setProgress} country="us" category="sports" />} />
          <Route path="/science" element={<News setProgress = {setProgress} country="us" category="science" />} />
          <Route path="/technology" element={<News setProgress = {setProgress} country="us" category="technology" />} />
          <Route path="/business" element={<News setProgress = {setProgress} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress = {setProgress} country="us" category="entertainment" />} />
          <Route path="/health" element={<News setProgress = {setProgress} country="us" category="health" />} />
          
          {/* Default route (e.g., if no category is selected) */}
          <Route path="/" element={<News setProgress = {setProgress} country="us" category="general" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
