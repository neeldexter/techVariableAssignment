import React, { useState } from 'react';
import styles from './mainCart.module.css'
import CloseIcon from '@material-ui/icons/Close';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Card, CardContent, Typography, Grid, TextField, CardMedia, CardActionArea, CardActions, makeStyles } from '@material-ui/core';





const MainCart = (props) => {
    { console.log("aadd", props.cartDetails) }
    const [stateRate, setStateRate] = useState(false);
    const [statePrice, setStatePrice] = useState(false);
    const [statefoodType, setStatefoodType] = useState(false);
    const [stateDistance, setStateDistance] = useState(false);


    const useStyles = makeStyles({
        root: {
            // maxWidth: 345,
            maxWidth: 310,
        },
        media: {
            // height: 140,
            height: 130,
        },
    });
    const classes = useStyles();

    // handleClosee = (item) => {

    // }
    return (
        <Grid container>
            {console.log("yes", stateRate)}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {stateRate === false ?
                    <div className={styles.filtering}>
                        <span onClick={props.handler}>5 ratings </span><span className={styles.close} onClick={() => setStateRate(true)}><CloseIcon /></span>
                    </div>
                    : null}
                {statePrice === false ?
                    <div className={styles.filtering}>
                        <span onClick={props.handlerPrice}> 0-700 </span><span className={styles.close} onClick={() => setStatePrice(true)}><CloseIcon /></span>
                    </div>
                    : null}
                {statefoodType === false ?
                    < div className={styles.filtering}>
                        <span onClick={props.handlerNonVeg}> Non - Veg </span><span className={styles.close} onClick={() => setStatefoodType(true)}><CloseIcon /></span>
                    </div>
                    : null}
                {stateDistance === false ?
                    <div className={styles.filtering}>
                        <span onClick={props.handlerDistance}>0-5km </span><span className={styles.close} onClick={() => setStateDistance(true)}><CloseIcon /></span>
                    </div>
                    : null}

            </Grid>
            {
                props.cartDetails.map(data => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={data.id}>


                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={data.image}
                                        title="FoodOrder"

                                    />
                                    <CardContent>
                                        <p className={styles.cartItem}>{data.occassion}</p>
                                        <p className={styles.mainPrice}><span className={styles.price}>{data.price}</span>/- per head - {data.dishCount}dishes</p>
                                        <div className={styles.rating} style={{ background: data.color }}>
                                            <StarBorderIcon /> {data.rating}
                                        </div>
                                        <div className={styles.count}>
                                            {data.ratingCount} Ratings
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid >
    )
}

export default MainCart;