import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.esm"

import Home from './components/Home';
import Weather from './components/Weather';
import Counter from './components/Counter';

const App=()=>{
  return (
  <>

  
  <Switch>
     <Route exact path="/"> <Home /></Route>
     <Route exact path="/counter"> <Counter /></Route>
     <Route exact path="/weather"> <Weather/></Route>
     <Redirect to="/"/>

   </Switch>

   </>
  );
}

export default App;
