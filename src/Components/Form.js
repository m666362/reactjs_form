import React from 'react';
import useTrackedStore from "../utils/ZustandStore";
import { useForm, Controller } from "react-hook-form";
import {Checkbox} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Form = () => {
    const state = useTrackedStore();
    const { handleSubmit, control, reset } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
                  alignContent='center'>
                <Controller
                    name="MyCheckbox"
                    control={control}
                    defaultValue={false}
                    // rules={{ required: true }}
                    render={({ field }) => <Checkbox {...field} />}
                />
                <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                    <Button
                        variant={"outlined"}
                        color={"primary"}
                        type={"submit"}
                    >
                        Submit
                    </Button>
                </Grid>

            </Grid>
        </form>
    );
};

export default Form;