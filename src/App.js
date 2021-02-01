
import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Contact from './component/contact/Contact';
import Galeria from './component/galeria/Galeria';
import Header from './component/Header/Header'
import Oferta from './component/Oferta/Oferta';
import Firma from './component/Firma/Firma';
import Home from './component/Home/Home'

function App() {
  let myRoute = (
      <Switch>
          <Route exact={true} path="/"        render={() =><Home />}/>
          <Route exact={true} path="/home"    render={() =><Home />}/>
          <Route exact={true} path="/firma"   render={() => <Firma />}/>
          <Route exact={true} path="/project" render={() =><div>project</div>}/>
          <Route exact={true} path="/oferta"  render={() => <Oferta />}/>
          <Route exact={true} path="/contact" render={() => <Contact />}/>
          <Route exact={true} path="/galeria" render={() => <Galeria />}/>
          <Redirect to={'/'}/>
      </Switch>
    )

  
  
  return (
    <div className="App">
      <Header />
      {myRoute}
    
    </div>
  );
}

export default (App);
