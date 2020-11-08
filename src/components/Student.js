import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid, Avatar } from '@material-ui/core';
import img from '../assests/avatar.jpg'; 
import { CSSTransition } from 'react-transition-group'

const useStyles = makeStyles({
    root: {
        minWidth: 345,
        marginLeft: "10%",
        marginTop:"10%"
    },
    large: {
        width: 100,
        height: 100,
        marginLeft:"30%"
    },
    text:{
        float:"right"
    }
});

const Student = (props) => {
    const classes = useStyles();
    return (
        <CSSTransition appear={true} in={true} classNames='student-transition' timeout={300}>
            <Grid item>
            <Card className={classes.root}>
            <CardActionArea>
                <Avatar className={classes.large}  alt="avatar" src={img} />
                <CardContent>
                <Typography gutterBottom variant="h7" component="h4">
                    Nombre: {props.studentData.first_name}
                </Typography> 
                <Typography gutterBottom variant="h7" component="h4">
                    Apellido: {props.studentData.surname}
                </Typography>         
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.text} color="primary"color="primary" href={`/alumnos2/${props.studentData.id}`}>
                        Ver más
                </Button>
            </CardActions>
            </Card>
            </Grid>
        </CSSTransition>
    )
}

export default Student;