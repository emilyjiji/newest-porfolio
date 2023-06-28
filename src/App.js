import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/project" element={<Projects />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

