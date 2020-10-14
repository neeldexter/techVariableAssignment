import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Accordion, makeStyles, AccordionSummary, AccordionDetails } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




const OccasionCheck = (props) => {
    const [state, setState] = React.useState({
        HouseParty: false,
        BabyShower: false,
        HouseWarming: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.checkValOccasion(event.target.name, event.target.checked)
    };

    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.HouseParty} onChange={handleChange} name="HouseParty" />}
                        label="HouseParty"
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.BabyShower} onChange={handleChange} name="BabyShower" />}
                        label="BabyShower"
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.HouseWarming} onChange={handleChange} name="HouseWarming" />}
                        label="HouseWarming"
                    />
                </FormGroup>

            </Grid>

        </div>
    )
}
export default OccasionCheck;