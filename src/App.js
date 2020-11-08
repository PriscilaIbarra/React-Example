import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Contador from './components/Contador';
//import {ContadorDos} from './components/Contador'; //import specific component of Contador.js script
import ContadorClass from './components/ContadorClass';
import StudentsList from './components/StudentsList';
import StudentsList2 from './components/StudentList2';
import data from './data' //read a file with a daata
import { HashRouter, Route, Switch } from 'react-router-dom'; //npm install react-router-dom --save 
//React Router doesnt support public and private routes, to implement them the developer has to create a another component that receives the component's name its own definition and makes a conditional rendering. If the user is logged the PrivateRoute returns a <Route /> component 
import RedirectOnClick from './components/RedirectOnClick';
import PrivateRouteClass from './components/routercomponents/PrivateRouteClass';
import PrivateRoute from './components/routercomponents/PrivateRoute'; 
import UserProfile from './components/privatecomponents/UserProfile';
import Home from './components/Home'
import NotFound from './components/NotFound';
import Header from './components/Header';
import Container from './components/Container';
import StudentData from './components/StudentData'
//--Create React app
//npx create-react-app my-app
//cd my - app
//yarn start
//---Instal redux
//npm i -S redux react-redux ->install redux

//instalar librería de transiciones 
//npm install react-transition-group --save

//install material ui
//npm install @material-ui/core
//@material-ui/styles se utiliza para estilos custom
//install icons npm install @material-ui/icons
 class App extends React.Component {
  constructor(){
    super();
    this.state = {
      total:data.length,  
      isLogg:true    
    }
  }

  updateTotal = (total) =>{ 
    this.setState({total:total});
  }
   
  /*updateIsAuth = (isAuth) => { 
   this.setState({
                  ...this.state,
                  isLogg:isAuth,
                })
  }*/

  render(){//Use BrowserRouter or HashRouter, dont merge
    return(
      <div className="App">       
        <HashRouter>
          <Header/>
          <h3>Total mostrado:{this.state.total}</h3>
          <Switch>     {/* Matches the words wrote in the browser with the component path*/}        
             <Route exact path='/' component={Home}/>         
             <Route path="/contador" component={ContadorClass}/>
             {/* Option 1

                <Route exact path="/alumnos">
                  <StudentsList students={data} onFilter={this.updateTotal} />
                </Route>
            */}
            {/*Option 2 */}
            {/* <Route exact path="/alumnos" component={() => <StudentsList students={data} onFilter={this.updateTotal}  />} /> */}  {/*onFilter={this.updateTotal} pass a function by parameter, sent a function like a prop */}
            <Route path="/alumnos">
              <StudentsList students={data} onFilter={this.updateTotal} />
            </Route>
            {/*
               <Route exact path="/alumnos" component={() => <StudentsList students={data} onFilter={this.updateTotal}  />} />    ->Dont re render the component when the uplifting is made  because component={()=><Component/>} create a new component as a result o a function but dont updated 
            */}
            {/*
               <Route exact path="/alumnos" render={() => <StudentsList students={data} onFilter={this.updateTotal}  />} />    -> reRender the component when the uplifting is made  ->update the component when a change is made
            */}
            <Route exact path="/alumnos2" render={() => <StudentsList2 students={data} onFilter={this.updateTotal} />} />          
            <Route path='/alumnos2/:id' component={StudentData()} />  
            <Route path='/container' render={() => <Container> <StudentsList2 students={data} onFilter={this.updateTotal} /> </Container> } /> {/* Render StudentList2 Component inside Container component */}
              <PrivateRoute path='/user-profile' isLogg={this.state.isLogg} component={UserProfile}/> 
              <PrivateRouteClass path='/private' component={UserProfile}  />{/*make uplifting if is log */}
            <Route path='/redirectExample' render={() => <RedirectOnClick/>}/>
            <Route component={NotFound}/>
          </Switch>         
        </HashRouter>
      </div>
    );
  }

 }

// pass data to the component by a property <StudentsList students={data}/>
export default App; // export all the file content as "App".
// to import something in another file it has to be exported first