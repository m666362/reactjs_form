import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import useTrackedStore from "../utils/ZustandStore";

const useStyles = makeStyles((theme) => ({
    //
}))

const CounterDemo = () => {
    const classes = useStyles();
    const state = useTrackedStore();

    useEffect(() => {
        // FayFetch.get('https://api.npoint.io/6db6479a282d181d7ceb', null, null, (status, data, ok) => {
        //     console.log("OK: " + ok)
        // })
    }, [])

    return (
        <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
              alignContent='center'>
            <Typography>{state.counter}</Typography>
            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    state.setCounter(+1)
                }}>+</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    state.setCounter(-1)
                }}>-</Button>
            </Grid>

        </Grid>
    );
};

export default CounterDemo;
