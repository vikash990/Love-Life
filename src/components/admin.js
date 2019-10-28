import React from 'react';
import {Link,Redirect} from 'react-router-dom';
class Admin extends React.Component{
    constructor(props){
        super(props)
    
            const token=localStorage.getItem("token");
            console.log(token);
            
            let loggedIn=true;
            if(token==null){
                
                loggedIn=false;
            }
            this.state={
                loggedIn
            }

        
    }
    render(){
        if(this.state.loggedIn===false){
        return <Redirect to="/login" />
        }
        return(

         <div>
             <h1>Hii I am an Admin</h1>
             <Link to="/logout">Logout</Link>

        </div>
        )
    }
}
export default Admin;