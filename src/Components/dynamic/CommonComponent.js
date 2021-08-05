import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useTrackedStore from "../../utils/ZustandStore";
import CustomTextField from "../form-component/CustomTextField";
import CustomCheckBox from "../form-component/CustomCheckBox";
import CustomSelect from "../form-component/CustomSelect";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CommonComponent = ({control, item, ...remainingProps}) => {
    const classes = useStyles();
    const state = useTrackedStore()

    return (
        <Grid>
            <InputDecider
                control={control}
                item={item}
                {...remainingProps}
            />
        </Grid>
    );
};

export default CommonComponent;


const InputDecider = ({item, control, ...remainingProps}) => {
    const inputProps = {control, item, ...remainingProps};
    console.log(item)
    // const inputProps = {inputSchema, control, errors, inputIndex, parentKey};

    switch (item.type) {
        case "textfield":
            return <CustomTextField {...inputProps} id={"something"}/>;
            break;
        // case "checkbox":
        //     return <CustomCheckBox {...inputProps} />;
        //     break;
        case "select":
            return <CustomSelect {...inputProps} id={"something"} />;
            break;
        default:
            return item.type + " is not defiend yet";
            break;
    }
    return <></>;
};