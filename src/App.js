import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Pages/Home';
import Project from './Components/ProjectSection/Project';




function App() {
  return (
    <>
    <Router>
      <Home />
      {/* <Project /> */}
    </Router>
    </>
  );
}

export default App;
