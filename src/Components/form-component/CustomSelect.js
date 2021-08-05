import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Controller} from "react-hook-form";
import useTrackedStore from "../../utils/ZustandStore";
import {MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CustomSelect = ({control, name, menus, ...remainingProps}) => {
    const classes = useStyles();
    const state = useTrackedStore()

    return (
        <Controller
        name={name}
        control={control}
        // rules={{ required: true }}
        render={({ field }) =>
            <Select
                {...field}
                {...remainingProps}
            >
                {
                    menus.map((menu, index)=> <MenuItem value={menu} key={menu}>{menu}</MenuItem>)
                }
            </Select>}
    />
    );
};

export default CustomSelect;
