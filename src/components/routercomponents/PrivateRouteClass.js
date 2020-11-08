// Auth + Redux
//https://stackoverflow.com/questions/53023217/react-private-route-higher-order-component

//https://stackoverflow.com/questions/48497510/simple-conditional-routing-in-reactjs

import React from 'react';
import {Route,Redirect} from 'react-router-dom';
//without redux and middleware

class PrivateRouteClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    isLogg = () =>{ //axios request  
        const result = true; 
        //this.props.onAuth(result);
        return result             
    }

    render(){
        
        const { component: Component, ...props } = this.props;
        
        return(
            <Route {...props} render={(props) => this.isLogg()? <Component {...props}/>:<Redirect to='/'/> } />
        )
    }
}

export default PrivateRouteClass;