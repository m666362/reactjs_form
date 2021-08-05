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
import {serviceData} from "../data/service-data";
import CommonComponent from "./dynamic/CommonComponent";

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
                        {/*{state.formState}*/}
                        <Grid item lg={6} md={12} sm={12} >
                            {
                                Object.keys(serviceData).map((item, index)=>{
                                    return state.formState===index && <Grid item>
                                        <CustomLabel htmlFor="fname-text">
                                            {serviceData[item].title}
                                        </CustomLabel>
                                        <CommonComponent
                                            id="fname-text"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            control={control}
                                            item={serviceData[item]}
                                        />
                                    </Grid>
                                })
                            }
                        </Grid>

                        <Grid item >
                            <Card style={{padding: 20, margin: 20, maxWidth: 300}}>
                                {
                                    Object.keys(state.formOutput).map((item, index)=> {
                                        if(index<=state.formState && state.formOutput[item]!= undefined){
                                            return <Grid>
                                                <span>{item} : </span>
                                                <span>{JSON.stringify(state.formOutput[item])}</span>
                                                <Button variant="outlined" style={{margin: 10}} onClick={()=>{
                                                    state.setFormAtParticular(index)
                                                }
                                                }>Edit</Button>
                                            </Grid>
                                        }
                                    })
                                }
                            </Card>
                        </Grid>

                        <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                            {state.formState < Object.keys(serviceData).length && <RenderButton/>}
                            {state.formState === Object.keys(serviceData).length && <Button variant="fill" style={{margin: 10}} color="primary" onClick={()=>{
                                state.setFormAtParticular(0);
                            }}>Reset</Button>}
                        </Grid>


                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

export default Form;