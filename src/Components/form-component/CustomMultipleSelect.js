import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useTrackedStore from "../../utils/ZustandStore";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CustomMultipleSelect = (props) => {
    const {item} = props;
    const classes = useStyles();
    const state = useTrackedStore()

    return (
        <Grid>

        </Grid>
    );
};

export default CustomMultipleSelect;
