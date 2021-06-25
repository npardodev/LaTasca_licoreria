import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar  from "./components/Navbar/Navbar";
import HomeWiew from './layout/HomeWiew'
import DetalleProductoWiew from './layout/DetalleProductoWiew'




function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/details/:producto">
            <DetalleProductoWiew />
          </Route>
          <Route path="/users">
          
          </Route>
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
