import React from 'react';
import { connect } from 'react-redux';
import actionValue from '../actions/value'; //import the action creator
import {Button} from '@material-ui/core'
//Class components have internal state
class ContadorClass extends React.Component {
 
 constructor(props){
     super(props); //extends parent attributes and methods
     //Initial definition of internal state
     this.state = {
       value: props.value ? props.value : 0,
       name:'name_',
     }
     this.increment2 = this.increment2.bind(this);
 }
 
 decrement = () => {
     const logger = () =>{
         console.log(this.state.value);
     }
     if(this.state.value<=0) return
     this.setState({value:this.state.value -1,logger});

     const newValue = this.state.value - 1;
     this.props.setValue(newValue);
    }

 //arrow function
 increment = () => {
    //this.setState({value:this.state.value+1});
    this.setState({
        ...this.state, //spread operator , copy the old state
        value:this.state.value+1, //update specific attribute
    });
    console.log(this.state);
    const newValue = this.state.value + 1;
    this.props.setValue(newValue);    
 }

//Commond function
increment2(){
    this.setState({value:1});   
}

evaluate = () =>{
  if(this.state.value>=0 && this.state.value<=5){
      return 'lower-number'
  }
  else if (this.state.value>=6 && this.state.value<=12){
      return 'right-number'
  }
  else {
      return 'upper-number'  
  }
}

render(){
     return(
         <div>            
            <div>Contador:<span className={this.evaluate(this.state.value)}>{this.state.value}</span></div>
            <Button variant="contained" color="primary" onClick={this.increment}>
                 Incrementar
            </Button>
             <Button variant="contained" color="secondary" onClick={this.decrement}>
                 Decrementar
            </Button>
         </div>
     )
 }
}



// className="cssClassName"
//Insert js code with interpolation {}

function mapDispatchToProps(dispatch) {
    return {
        setValue:(value)=>dispatch(actionValue(value)) //execute the action creator and returns the action object
    }
}
export default connect(null, mapDispatchToProps) (ContadorClass);



/*
Dont need mapStateToProps if i use Provider component in index.js
const mapStateToProps = (state) => {
  return {
      key : state.value
  }
}
*/
