import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar  from "./components/navbar/Navbar";
import HomeWiew from './layout/HomeWiew'





function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Switch>
        
          <Route exact path="/">
            <HomeWiew />
          </Route>
          <Route exact path="*">
            
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
