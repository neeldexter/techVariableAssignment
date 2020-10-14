import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Accordion, makeStyles, AccordionSummary, AccordionDetails } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



const FilterData = (props) => {
    const [state, setState] = React.useState({
        LunchBox: false,
        snackBox: false,
        Buffet: false,
        FoodTrucks: false
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12}>

                {props.format.map(formatName => {
                    return (
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox checked={state.formatName} onChange={handleChange} name={formatName} />}
                                label={formatName}
                            />
                        </FormGroup>

                    )
                })}

            </Grid>

        </div>
    )
}
export default FilterData;