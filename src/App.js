
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componet/Home';
import Searchlunette from './componet/Searchlunette';
import Maplunette from './componet/Maplunette';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchlu" element={<Searchlunette/>}/>
        <Route path="/maplu" element={<Maplunette/>}/>

        </Routes>
      </Router>
  
      
    </div>
  );
}

export default App;
