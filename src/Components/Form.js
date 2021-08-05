import React, {useState} from 'react';
import useTrackedStore from "../utils/ZustandStore";
import { useForm, Controller } from "react-hook-form";
import {Card, CardContent, Checkbox, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CustomTextField from "./form-component/CustomTextField";
import CustomLabel from "./form-component/CustomLabel";
import CustomSelect from "./form-component/CustomSelect";
import CustomCheckBox from "./form-component/CustomCheckBox";
import RenderButton from "./form-component/RenderButton";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        direction: "row"
    },
}))


const Form = () => {
    const { register, handleSubmit, control } = useForm();
    const classes = useStyles();

    const state = useTrackedStore();
    // const { handleSubmit, control, reset } = useForm();
    const onSubmit = data => state.setFormOutput(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card >
                <CardContent className={classes.root}>
                    <Grid container justify={"center"} alignItems={"center"} direction={"row"}>
                        <Grid item lg={6} md={12} sm={12} >
                            {
                                state.formState===1 && <Grid item>
                                    <CustomLabel htmlFor="fname-text">
                                        Text Field
                                    </CustomLabel>
                                    <CustomTextField
                                        id="fname-text"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        name="textField"
                                        control={control}
                                    />
                                </Grid>
                            }
                            {
                                state.formState===2 && <Grid item>
                                    <CustomLabel htmlFor="fname-text">
                                        Select Field
                                    </CustomLabel>
                                    <CustomSelect
                                        id="fname-text"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        name="select"
                                        control={control}
                                        menus={[1, 2, 3]}/>
                                </Grid>
                            }
                            {
                                state.formState ===3 && <Grid item>
                                    <CustomLabel htmlFor="fname-text">
                                        Select Field
                                    </CustomLabel>
                                    <CustomCheckBox
                                        id="fname-text"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        name="checkbox"
                                        control={control}/>
                                </Grid>
                            }
                            {
                                state.formState ===4 && <Grid item>
                                    <CustomLabel htmlFor="fname-text">
                                        Select Field
                                    </CustomLabel>

                                </Grid>
                            }
                        </Grid>

                        <Grid item style={{padding: 20, margin: 20}}>
                            <Card>
                                {JSON.stringify(state.formOutput)}
                            </Card>
                        </Grid>

                        <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                            <RenderButton/>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

export default Form;