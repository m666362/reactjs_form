import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "5px",
        marginTop: "15px",
        display: "block",
    },
}))

const CustomLabel = (props) => {
    const classes = useStyles();

    return (
        <Typography
            className={classes.root}
            variant="h6"
            {...props}
            component="label"
            htmlFor={props.htmlFor}
        />
    );
};

export default CustomLabel;
