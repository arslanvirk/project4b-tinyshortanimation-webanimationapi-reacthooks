import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tech from '../images/tech.jpg';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        backgroundColor: "rgb(23, 25, 48)",
        //background: "linear-gradient(to right, rgb(23, 25, 48), rgb(23, 25, 48))",
        height: "100%",
        width: "100%",
    },
    heading: {
        marginTop: "60px",
        marginLeft: "20px",
        color: 'white',
    },
    tech_img: {
        zIndex: "2",
        top: "80px",
        width: "100%"
    },
    network_img: {
        width: "40%",
        left: "360px",
        top: "-35px",
        zIndex: "2",
        position: "absolute",
    }
}));

export default function Section1() {
    const classes = useStyles();

    const netanim = useWebAnimations({
        keyframes: {
            transform: "translateY(160px)",
        },
        timing: {
            duration: 2500,
            iterations: Infinity,
            direction: "alternate",
            easing: "linear"
        },
    });

    const textanim = useWebAnimations({
        keyframes: [
            { transform: "translateX(100px)" },
            { transform: 'scale(1)' },
            { transform: 'scale(1.5)' },
        ],
        timing: {
            duration: 3500,
            iterations: Infinity,
            direction: "alternate",
            easing: "linear"
        },
    });
    const { ref } = useWebAnimations({ ...bounce });

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item lg={6} xs={12} spacing={0}>
                    <h1 className={classes.heading} ref={ref}>Bootcamp 2020 Project 4B</h1>
                    <h3 className={classes.heading} ref={textanim.ref}>Your web presence just got so much better</h3>
                </Grid>
                <Grid item lg={6} xs={12} style={{ position: "relative", display: "flex", justifyContent: "flex-end", zIndex: "1" }}>
                    <img src={tech} alt="tech" className={classes.tech_img} />
                    <img src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" ref={netanim.ref} className={classes.network_img} alt="network" />
                </Grid>
            </Grid>

        </div>
    )
}
