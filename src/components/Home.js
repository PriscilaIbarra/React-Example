import React from 'react';
import {connect} from 'react-redux'
//conncet function that binds the component to redux

const Home = (props) =>{
 return(
  <div>
         <h1>Bienvenido</h1>
         <h3>El ultimo valor del contador es {props.value}</h3>
  </div>

 );
}

//retrive the properties of state that i want to use
//convention name mapStateToProps

function mapStateToProps(state) {
    return {
        value:state.value,
    }
}

//connect(namefunction) 
export default connect(mapStateToProps)(Home);