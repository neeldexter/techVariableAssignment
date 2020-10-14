import React, { useState } from 'react';

import { Card, CardContent, Typography, Grid, TextField, CardMedia, CardActionArea, CardActions, makeStyles, Slider } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './slider.module.css'
var slideVal = 500;

const SliderChange = (props) => {

    const [state, setState] = useState(5);

    const handleOnChange = (e, value) => {
        setState(value)
        slideVal = state * 100
        props.slider(state)
    }
    return (
        <div className={styles.slideBox}>
            <p className={styles.priceHead}>PRICE ₹500-₹2000</p>
            <Slider
                value={state}
                onChange={handleOnChange}
            />
            <span className={styles.sliderShow}>₹{slideVal}</span>
        </div>

    )
}
export default SliderChange;