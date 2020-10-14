import React, { useState } from 'react';

import { Card, CardContent, Typography, Grid, TextField, CardMedia, CardActionArea, CardActions, makeStyles, Slider } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const SliderChange = (props) => {

    const [state, setState] = useState(10);

    const handleOnChange = (value) => setState({ ...state, state: value });
    return (
        <Slider
            value={state}
            orientation="horizontal"
            onChange={e => setState(e.target.value)}
        />

    )
}
export default SliderChange;