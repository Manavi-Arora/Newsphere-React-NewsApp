
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar/>
      <News country = "us" category = "science"/>
    </div>
  );
}

export default App;
