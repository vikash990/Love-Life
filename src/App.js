import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Login from './components/login.js';
import {BrowserRouter as Router,Link,Navlink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Logout from './components/logout.js';
import Admin from './components/admin.js';
import './App.css';

class App extends React.Component{
  render(){
  return (
    <Router>
    <div className="App">
          <Header/>
          <Route path ="/" exact strict component={Home}/>
          <Route path="/about" exact strict component={About}/>
          <Route path="/contact" exact strict component={Contact}/>
          <Route path ="/login" exact strict component={Login}/>
          <Route path ="/logout"exact strict component={Logout}/>
          <Route path="/admin" exact strict component={Admin}/>
          <Footer/>      
    </div>
    </Router>
  );
}
}

export default App;
