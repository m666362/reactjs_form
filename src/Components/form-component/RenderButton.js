import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useTrackedStore from "../../utils/ZustandStore";
import Button from "@material-ui/core/Button";
import {serviceData} from "../../data/service-data";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const RenderButton = (props) => {
    const {item} = props;
    const classes = useStyles();
    const len = Object.keys(serviceData).length;
    const state = useTrackedStore()

    return (
        <Button
            variant={"outlined"}
            color={"primary"}
            type={"submit"}
            style={{margin: 10}}
            onClick={()=>{
                state.setFormState(+1)
            }}>
            {state.formState<len-1?"Next":"Submit"}
        </Button>
    );
};

export default RenderButton;
