import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useTrackedStore from "../../utils/ZustandStore";
import {Controller, useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CustomTextField = ({control, name, ...remainingProps}) => {
    const classes = useStyles();
    const state = useTrackedStore()

    return (
        <Controller
            name={name}
            control={control}
            // rules={{ required: true }}
            render={({ field }) =>
                <TextField
                {...field}
                {...remainingProps}
                />}
        />
    );
}

export default CustomTextField;
