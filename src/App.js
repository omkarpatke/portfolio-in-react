import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProjectPage from './Pages/ProjectPage/ProjectPage';
import BlogPage from './Pages/BlogPage/BlogPage';



function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact  path='/' component={Home}/>
      <Route exact  path='/projects' component={ProjectPage}/>
      <Route exact path='/blogs' component={BlogPage}/>
    </Switch>
      
    </Router>
    {/* <Router>
      <Navbar />
    <Switch>
       <Route path='/' element={<Home />} exact />
       <Route path='/projects' element={<ProjectPage />} exact />
       <Route path='/blogs' element={<BlogPage />} exact />
       </Switch>
    </Router> */}
    </>
  );
}

export default App;
