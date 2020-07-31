import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import worker from '../images/gamer.png';
import useWebAnimations, {bounce} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        //background: "linear-gradient(to bottom, white, grey, silver)",
        height: "100%",
    },
    heading:{
        color:'',
        padding: "10px",
        textAlign:'center'
    },
    worker_img: {
        margin: "5px",
    }
  }));

export default function Section2() {
    const classes = useStyles();
    const { keyframes, timing } = bounce;
    const workeranim=useWebAnimations({
        keyframes,
        timing:{
            ...timing,
            delay: 250,
            duration: 4000,
            iterations: Infinity,
           }
        });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1 className={classes.heading}>Latest Web Design Trends</h1>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <img src={worker} ref={workeranim.ref} alt="tech" className={classes.worker_img} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <h3 className={classes.heading}>
                    Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.
                    </h3>                    
                </Grid>
            </Grid>
            
        </div>
    )
}
