import React from 'react';
import Header from './components/headerComponents/header';
import Information from './components/informationComponents/information';
import Home from './components/pages/Home/home';
import Contact from './components/contactComponent/contact';
import Gallery from './components/galleryComponent/gallery';
import Menu from './components/menuComponets/menu';


import './App.css';

import ReactDOM from 'react-dom';
import{
BrowserRouter as Router,
  Link,
  Route

}from 'react-router-dom';
function App() {
  return (
    <Router>

    <div className="App">
     
     <Header/>
     <Route exact path="/Home" component={Home}/> 
     <Route exact path='/INFORMATIOn' component={Information}/> 
     <Route exact path='/CONTACT' component={Contact}/>
     <Route exact path='/Gallery' component={Gallery}/>
     <Route exact path="/MENU" component={Menu}/>
     
     
     
    
    </div>

    </Router>
  
  );
}

export default App;

