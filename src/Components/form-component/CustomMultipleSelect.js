import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Controller} from "react-hook-form";
import useTrackedStore from "../../utils/ZustandStore";
import {Checkbox, ListItemText, MenuItem, Select, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const CustomMultipleSelect = ({control, item, ...remainingProps}) => {
    const classes = useStyles();
    const state = useTrackedStore()


    return (
        <Grid>
            {/*{JSON.stringify(item)}*/}
            <Controller
                control={control}
                name={item.title}
                defaultValue={[]}
                render={({ field }) => {
                    return (
                        <TextField
                            {...field}
                            className={classes.root}
                            select
                            id={item.title}
                            variant="outlined"
                            label={item.title}
                            SelectProps={{
                                multiple: true,
                                value: field.value,
                                renderValue: (selected) => selected.join(`, `),
                            }}
                        >
                            {
                                item.menus.map((n,index) => (
                                    <MenuItem key={n} value={n}>
                                        <Checkbox checked={field.value.includes(n)} />
                                        <ListItemText primary={n} />
                                    </MenuItem>
                                ))}
                        </TextField>
                    );
                }}
            />
        </Grid>
    );
};

export default CustomMultipleSelect;
