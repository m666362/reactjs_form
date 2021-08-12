import React from 'react';
import {Controller} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import {IonItem, IonLabel, IonList, IonRadio, IonRadioGroup} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

const CustomRadioButton = ({control, item, ...remainingProps}) => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid>
            <Controller
                name={item.title}
                control={control}
                // defaultValue={inputSchema.defaultValue}
                // rules={inputSchema.rules}
                render={({ field }) => {
                    return (
                        <FormControl component="fieldset" {...field}>
                            <RadioGroup value={field.value}>
                                {item.menus.map((option) => {
                                    return (
                                        <FormControlLabel
                                            value={option.name}
                                            control={<Radio />}
                                            label={option.name?option.name:option}
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </FormControl>
                    );
                }}
            />
            {/*{JSON.stringify(item)}*/}
            {/*<Controller*/}
            {/*    control={control}*/}
            {/*    name={item.title}*/}
            {/*    render={({ field: { onChange, value } }) => (*/}
            {/*        <IonList>*/}
            {/*            <IonRadioGroup*/}
            {/*                value={value}*/}
            {/*                onIonChange={({ detail: { value } }) => onChange(value)}*/}
            {/*            >*/}
            {/*                {*/}
            {/*                    item.menus.map((menu, index)=>{*/}
            {/*                        return <IonItem>*/}
            {/*                            <IonLabel>{menu.name?menu.name:menu}</IonLabel>*/}
            {/*                            <IonRadio value={menu} slot="start" />*/}
            {/*                            <p>{menu.subText?menu.subText: ""}</p>*/}
            {/*                        </IonItem>*/}
            {/*                    })*/}
            {/*                }*/}
            {/*            </IonRadioGroup>*/}
            {/*        </IonList>*/}
            {/*    )}*/}
            {/*/>*/}
        </Grid>
    );
}

export default CustomRadioButton;
