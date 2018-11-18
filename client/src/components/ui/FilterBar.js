import React from 'react'
import {Grid, Button} from '@material-ui/core'

export default class FilterBar extends React.Component {
    render(){
        return (<div style={{width: '100%', height: '46px', paddingTop:'10px'}}>
            <Grid container
                  spacing={8}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
            >
            <Grid item>
                <Button size='small' variant='outlined'>Dates</Button>
            </Grid>
            <Grid item >
                <Button size='small' variant='outlined'>Guests</Button>
            </Grid>
                <Grid item >
                    <Button size='small' variant='outlined'>Filters</Button>
                </Grid>
        </Grid></div>)
    }
}