import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';

const cards = ({confirmed,recovered,deaths,lastUpdate}) => {
    //console.log(confirmed.value);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography colr="textSecondary">REAL dATE</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography colr="textSecondary">REAL dATE</Typography>
                        <Typography variant="body2">Number of Recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deceased</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography colr="textSecondary">REAL dATE</Typography>
                        <Typography variant="body2">Number of deceased cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default cards;
