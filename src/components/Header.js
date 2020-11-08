import React from 'react';
import { AppBar, Toolbar, Button, Typography,Icon} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

export default () =>
   <div>
        <AppBar position="static">
            <Toolbar>
              <Grid
              justify="space-between" 
              container
              spacing={24}
              >
            <Grid item>
               <Typography variant="h6">
                    <Button color="inherit" href="#/">
                        <Icon>
                            home
                        </Icon>
                    </Button>
                </Typography>
            </Grid>    
            <Grid item>
                <Button color="inherit" href="#/contador" right>
                    Contador 
                </Button>               
                <Button color="inherit" href="#/alumnos2">
                   Alumnos 
                </Button>
            </Grid>     
            </Grid>
            </Toolbar>
        </AppBar>     
    </div>

 