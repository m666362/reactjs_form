import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Controller} from "react-hook-form";
import {List, MenuItem, Select} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {IonItem, IonLabel, IonList, IonRadio, IonRadioGroup} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

const CustomRadioButton = ({control, item, ...remainingProps}) => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid>
            {/*{JSON.stringify(item)}*/}
            <Controller
                control={control}
                name={item.title}
                render={({ field: { onChange, value } }) => (
                    <IonList>
                        <IonRadioGroup
                            value={value}
                            onIonChange={({ detail: { value } }) => onChange(value)}
                        >
                            {
                                item.menus.map((menu, index)=>{
                                    return <IonItem>
                                        <IonLabel>{menu.name?menu.name:menu}</IonLabel>
                                        <IonRadio value={menu} slot="start" />
                                    </IonItem>
                                })
                            }
                        </IonRadioGroup>
                    </IonList>
                )}
            />
        </Grid>
    );
}

export default CustomRadioButton;
