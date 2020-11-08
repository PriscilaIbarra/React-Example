import React from 'react';
import { withRouter } from "react-router-dom";

class RedirectOnClick extends React.Component {
    constructor(){
      super();
      this.state = {}
    }
    
    redirect = () =>{
        this.props.history.push("/contador");
    }
    render(){
        return(
            <button onClick={this.redirect}>Redirect</button>
        )
    }
}

export default withRouter(RedirectOnClick);