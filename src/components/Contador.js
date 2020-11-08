import React from 'react';

export default () => {
 //can declare js code here but react will not detect changes and will not re render the component , this is the difference between function and class component   
 return (
  <div>Hello world!</div>
 )
}

function ContadorDos(){
    return (
        <div>Hello world 2</div>
    );
}

export {ContadorDos}; //export specifict component , not all the file
