import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((themes) => ({
  paper: {
    padding: themes.spacing(2),
    textAlign: "center",
    color: themes.palette.text.secondary,
    backgroundcolor: "white",
    border: "2px solid black",
  },
}));

const Cell = (props) => {
    const classes =useStyles();

    return (
        <Grid item sm ={3}>
            <Paper style={{backgroundColor:props.color}} className={classes.paper}>
                {props.children}
            </Paper>
        </Grid>
    );

};

export default Cell;
