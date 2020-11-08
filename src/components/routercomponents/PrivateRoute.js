import React from 'react';
import { Route, Redirect} from 'react-router-dom';

//https://medium.com/wesionary-team/private-and-public-routes-with-react-router-e5f814ccff2f
// Receive a component as an argument and a copy of props
const PrivateRoute = ({component:Component,...restprops}) => {    
     //let isLogg = true; //check if isLogg then render the component else redirect to root page
    return ( //   <Route {...restprops} render={(props) => isLogg ? <Component {...props} /> : <Redirect to='/' /> }/>
         <Route {...restprops} render={(props) => restprops.isLogg ? <Component {...props} /> : <Redirect to='/' /> }/>
     )
}

export default PrivateRoute;
