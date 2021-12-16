import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProjectPage from './Pages/ProjectPage/ProjectPage';
import BlogPage from './Pages/BlogPage/BlogPage';


function App() {
  return (
    <>
    <Router>

    <Home />
    </Router>
    {/* <Router>
    <Switch>
       <Route path='/home' element={<Home />} exact />
       <Route path='/projects' element={<ProjectPage />} exact />
       <Route path='/blogs' element={<BlogPage />} exact />
       </Switch>
    </Router> */}
    </>
  );
}

export default App;
