import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
import Love from './Love.jpg';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <nav>
            <img src ={Love}/>
                <ul >
                   <li><NavLink to ="/" exact activeStyle={
                       {color:'white'}

                   }>Home</NavLink></li>
                    <li><NavLink to="/about" exact activeStyle={
                       {color:'white'}

                   }>About</NavLink></li>
                    <li><NavLink to ="/contact" exact activeStyle={
                       {color:'white'}

                   }>Contact</NavLink></li>
                    <li><NavLink to="/login" exact activeStyle={
                       {color:'white'}

                   }>Login</NavLink></li>
                   
                   <li><NavLink to ='/register' exact activeStyle={
                       {color:'white'}
                   }>Register</NavLink></li>
                </ul>
            </nav>
        )
    }
}
export default Header;