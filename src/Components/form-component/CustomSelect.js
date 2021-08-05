import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Controller} from "react-hook-form";
import useTrackedStore from "../../utils/ZustandStore";
import {MenuItem, Select} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CustomSelect = ({control, item, ...remainingProps}) => {
    const classes = useStyles();
    const state = useTrackedStore()


    return (
        <Grid>
            {/*{JSON.stringify(item)}*/}
            <Controller
                name={item.title}
                control={control}
                // rules={{ required: true }}
                render={({ field }) =>
                    <Select
                        {...field}
                        {...remainingProps}
                    >
                        {
                            item.menus.map((menu, index)=> <MenuItem value={menu} key={menu}>{menu.name?menu.name:menu}</MenuItem>)
                        }
                    </Select>}
            />
        </Grid>
    );
};

export default CustomSelect;
