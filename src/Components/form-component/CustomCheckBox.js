import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useTrackedStore from "../../utils/ZustandStore";
import {Checkbox} from "@material-ui/core";
import {Controller} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CustomCheckBox = ({name, control, ...remainingProps}) => {
    const classes = useStyles();
    const state = useTrackedStore()

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox {...field} {...remainingProps} />}
        />
    );
};

export default CustomCheckBox;
