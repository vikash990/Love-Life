import React from 'react';
import {Link} from 'react-router-dom';

class Logout extends React.Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token");
    }
    render(){
        return(
            <div>
                <p>You have been logout</p>
                <Link to="/login">Login Again</Link>


            </div>
        )
    }
}
export default Logout;