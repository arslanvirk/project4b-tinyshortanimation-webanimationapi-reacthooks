import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tech from '../images/computers.jpg';
import workflow from '../images/WorkFlow.png';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background: "linear-gradient(to bottom, rgb(0, 141, 160), rgb(1, 169, 180),rgb(0, 150, 163))",
        height: "100%",
    },
    heading:{
        marginTop:"60px",
        marginLeft: "20px",
        color:'white',
    },
    tech_img: {
        marginTop: "-5rem",
    },
    workflow_img: {
        width: "76px",
        marginLeft: "25rem"
    }
  }));

export default function Section4() {
    const classes = useStyles();

    const workflowanim = useWebAnimations({
        keyframes: {
          transform: "rotate(360deg)",
        },
        timing: {
          duration: 2500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in"
        },
    });
    

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
            <Grid item lg={6} xs={12}>
                    <img src={workflow} ref={workflowanim.ref} className={classes.workflow_img} alt="workflow"/>
                    <img src={tech} alt="tech" width="100%" className={classes.tech_img} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <h1 className={classes.heading}>Contact Us</h1>
                    <h3 className={classes.heading}>Address: abc......</h3>
                    <h3 className={classes.heading}>Phone: 1234....</h3>
                    <h3 className={classes.heading}>Email: a...@email.com</h3>
                </Grid>
            </Grid>
        </div>
    )
}
