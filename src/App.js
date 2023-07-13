import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
//import ProjectsPage from './components/ProjectsPage';
import Home from './components/Home';
 import './index.css';
import Projects from './components/Projects';

function App() {
    let component
    switch(window.location.pathname){
      case "/":
        component = <Home />
        break;
      case "/projects":
        component = <Projects />
        break;
    }

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/projects" element={<ProjectsPage />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <Navbar />
    {component}
    </>
  );
}

export default App;


