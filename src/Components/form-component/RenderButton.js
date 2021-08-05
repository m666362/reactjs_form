import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useTrackedStore from "../../utils/ZustandStore";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const RenderButton = (props) => {
    const {item} = props;
    const classes = useStyles();
    const state = useTrackedStore()

    const myButton = ()=> {
        if(state.formState<=3){
            return <Button
                variant={"outlined"}
                color={"primary"}
                type={"submit"}
                onClick={()=>{
                    state.setFormState(+1)
                }}>
                Next
            </Button>
        }else{
               return <Button
                    variant={"outlined"}
                    color={"primary"}
                    type={"submit"}
                >
                    Submit
                </Button>
            }
    }

    return myButton();
};

export default RenderButton;
