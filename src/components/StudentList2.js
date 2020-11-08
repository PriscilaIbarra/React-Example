import React from 'react';
import Student from './Student';
import { Grid, TextField, Icon,InputAdornment,Button} from '@material-ui/core';
import { connect } from 'react-redux';
import addStudent from '../actions/addStudent';

class StudentList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: props.students,
            searchValue:'',
            name:'',
            surname:'',            
        }       
    }

    filterBy = (event) => {
        if (!event.target.value) {
            this.reset()
            return
        }
        const result = this.state.students.filter(
            e => e.first_name.includes(event.target.value)
        )
        this.setState({ students: result , searchValue:event.target.value});     
        this.updateParent(result.length);
    }

    updateParent = (length) => {
       this.props.onFilter(length);
    }

    reset = () => {
        this.setState({ students: this.props.students , searchValue:'' });
        this.props.onFilter(this.props.students.length);
    }

    saveStudent = () => {
        const newStudent = {
            id: this.state.students.length,
            first_name: this.state.name,
            surname: this.state.surname,
        }

        this.setState({ students: [...this.state.students, newStudent] })      
        this.props.persist(newStudent);
       
    }

    handerOnChange=(e)=>{
      if(!e.target.value) return
      this.setState({
        [e.target.name]:e.target.value
      });
      console.log(this.state);
    }
    render() {
        return (
            <div>                                             
                <TextField 
                id="filled-basic"
                label="Buscar" 
                variant="filled"
                value={this.state.searchValue}
                onChange={this.filterBy}
                InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <Icon>search</Icon>
                            </InputAdornment>
                        ),
                    }}
                /> 
                <Grid justify="flex-end" >                                
                <TextField
                    id="filled-basic"
                    label="Nombre"
                    name="name"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <Icon>person</Icon>
                            </InputAdornment>
                        ),
                    }}
                    onChange={this.handerOnChange}
                />
                
                <TextField
                   style={{marginLeft:"5%"}}
                    id="filled-basic"
                    label="Apellido" 
                    name="surname"   
                    onChange={this.handerOnChange}                             
                />
                    <Button style={{ marginLeft: "2%",marginTop:"-50px;" }} color="primary" onClick={this.saveStudent} onKeyUp={this.saveStudent} variant="contained">Agregar</Button>                                       
                </Grid>    

                <Grid 
                container spacing={3} 
                alignItems="flex-start">
                    {this.state.students.map((e => <Student key={e.id} studentData={e} />))}
                </Grid>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

function mapDispatchToProps(dispatch) {
    return {
        persist: (student) => dispatch(addStudent(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList2);