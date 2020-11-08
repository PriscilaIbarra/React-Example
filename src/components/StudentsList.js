import React from 'react';

class StudentList extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            students :props.students,
            searchVal:'',
        }
        this.searchValue = React.createRef();
     }
     
     filterBy = (event) => {
        let l = event.target.value;
        const result = this.state.students.filter(
            e => e.first_name.includes(l)
        )
        this.setState({ students: result });
        this.props.onFilter(result.length);    
     }

     reset = () =>{
         this.searchValue.current.value = '';
         this.setState({ students: this.props.students });
         this.props.onFilter(this.props.students.length);
     }

     render(){
         return(
             <div>
                 <h4>
                     Cantidad de estudiantes:{this.props.students.length} 
                 </h4>
                 <div>
                     <label> 
                         Buscar alumno: 
                     </label>
                     <input type="text" ref={this.searchValue} onChange={this.filterBy}></input>                  
                     <button onClick={this.reset}>Reset</button>   
                 </div>            
                 {/* Option 1 */}
                 <ul>
                     {this.state.students.map((e => <li key={e.id}>Nombre:{e.first_name}, Apellido: {e.last_name}</li>))}
                 </ul>  
             </div>             
         )
     }

}


export default StudentList;