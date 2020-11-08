import React from 'react'

const Container = (props) => { // Container Component receive another component like a prop
    return(
      <div className="container">
          {props.children} {/* To indicate that you want to render children component inside Container parent component  */}
      </div>
    );
}

export default Container;